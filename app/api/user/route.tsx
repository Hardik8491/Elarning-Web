//@ts-nocheck
import { authOptions } from "@/lib/auth";
import prismadb from "@/lib/prismadb";
import { hash } from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  const userSchema = z.object({
    name: z.string().min(1, "Name is required").max(100),
    email: z.string().min(1, "Email is required").max(100),
    password: z.string().min(8, "Password must have at least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm Password is required"),
    // emailVerified: z.boolean(), // Adding fields to schema
    // // userImage: z.string(),
    phoneNumber: z.string(),
  });

  try {
    const body = await req.json();
    //  const validatedData = userSchema.parse(body); // Validate request body
    const validatedData = body; // Validate request body

    const {
      email,
      name,
      password,
      // userImage,
      phoneNumber,
      // emailVerified,
      confirmPassword,
    } = validatedData;

    const existingUserByEmail = await prismadb.user.findUnique({
      where: { email: email },
    });

    // if (existingUserByEmail) {
    //   return NextResponse.json(
    //     { user: null, message: "User already exists" },
    //     { status: 409 }
    //   );
    // }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { message: "Password and Confirm Password do not match" },
        { status: 400 }
      );
    }

    const hashPassword = await hash(password, 10);

    const newUser = await prismadb.user.create({
      data: {
        name,
        email,
        // userImage,
        // emailVerified,
        password: hashPassword,
        phoneNumber,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

// pages/api/user.js

export async function PATCH(req: Request, res: Response) {
  const currentUser: {
    user: any;
    id?: string;
  } = (await getServerSession(authOptions)) as { id?: string };

  const body = await req.json();

  const {
    name,
    email,
    gender,
    birthday,
    language,
    phoneNumber,
    emailVerified,
    userImage,
    country,
    currentPassword,
    newPassword,
    confirmPassword,
    emailNotification,
    privateAccount,
  } = body;

  const date = new Date(birthday);
  const isoDateString = date.toISOString();

  try {
    // Simulated update operation
    const updatedUser = await prismadb.user.update({
      where: {
        id: currentUser?.user?.id as string,
      },
      // Assuming 'id' is the primary key of the User model

      data: {
        name,
        email,
        gender,
        phoneNumber,
        emailVerified,
        userImage,
        birthday: isoDateString, // Add the 'birthday' property here
        language,
        country,
        password: currentPassword,
        emailNotification,
        privateAccount,

        // Add other user fields here
      },
    });

    // Send back the updated user data
    return NextResponse.json(
      { user: updatedUser, message: "User information updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error updating user information:", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const currentUser = (await getServerSession(authOptions)) as {
      user: any;
      id?: string;
    };

    const user = await prismadb.user.findUnique({
      where: {
        id: currentUser?.user?.id,
      },
    });

    if (!user) {
      // Handle case where user is not found
      return new NextResponse("User not found", { status: 404 });
    }

    return NextResponse.json(
      { user: user, message: "User information updated successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("[user_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
