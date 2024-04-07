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
          randomKey: "Hey cool",
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
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
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
    async signIn({ user, profile, account, credentials }) {
      console.log(user, "FROM SIGNIN CALLBACK CONSOLE");

      try {
        const GoogleUserLoginDataToBackend = await axios.post(
          `http://localhost:3000/api/auth-user`,
          {
            email: user.email,
          }
        );
        // console.log(GoogleUserLoginDataToBackend, "flask backend call");
      } catch (err) {
        console.log(err);
      }
      return true;
    },
  },
};
