// @ts-ignore
import prisma from "@/lib/prismadb";
import { compare, compareSync } from "bcryptjs";
import NextAuth, { AuthOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import axios from "axios";

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Sign in...");

        console.log(credentials);

        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        const passwordMatch = await compareSync(
          credentials.password,
          user?.password || ""
        );

        if (!passwordMatch) {
          return null;
        }

        return {
          id: user.id + "",
          email: user.email,
          name: user.name,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId:
        "3624695014435898" || (process.env.FACEBOOK_CLIENT_ID as string),
      clientSecret:
        "bd7407e6049c8b1b7d07bf65f81388db" ||
        (process.env.FACEBOOK_CLIENT_SECRET as string),
    }),
  ],
  secret: "HARDIK8491",
  callbacks: {
    async signIn({ user, profile, account, credentials }): Promise<boolean> {
      try {
        const newUserResponse = await axios.get(
          `http://localhost:3000/api/auth-user`,
          {
            params: {
              email: user.email,
            },
          }
        );

        // If user data doesn't exist or if the email doesn't match, create a new user
        if (
          !newUserResponse.data ||
          user.email !== newUserResponse.data.user.email
        ) {
          const createUserResponse = await axios.post(
            `http://localhost:3000/api/user`,
            {
              email: user.email,
              name: user.name,
              password: user.name, // Assuming password is same as name for simplicity
              confirmPassword: user.name, // Assuming confirmPassword is same as password
              phoneNumber: "123456789",
            }
          );

          // Check if user creation was successful
          if (!createUserResponse.data || !createUserResponse.data.user) {
            console.error("User creation failed.");
            return false;
          }

          return createUserResponse.data.user; // Return newly created user
        }

        // Fetch the updated user data
        const updatedUser = newUserResponse.data.user;
        console.log(updatedUser);

        // Return the updated user data to update the session
        return updatedUser;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },

    session: async ({ session, token }) => {
      const user = await prisma.user.findUnique({
        where: {
          // Use a unique identifier from the database (e.g., email or ID)
          email: token?.email as string,
        },
      });

      return {
        ...session,
        user: {
          ...session.user,
          id: user?.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};
