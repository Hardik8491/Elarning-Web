//@ts-nocheck
import { authOptions } from "@/lib/auth";
import prismadb from "@/lib/prismadb";
import { hash } from "bcryptjs";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: Request) {
  

  try {
    const body = await req.json();
    const validatedData = body; // Validate request body

    const {
    email
    } = validatedData;

    const existingUserByEmail = await prismadb.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }



    

    const newUser = await prismadb.AuthUser.create({
      data: {
       email
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
  const currentUser: { id?: string } = (await getServerSession(
    authOptions
  )) as { id?: string };

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
        id: currentUser?.user?.id
      },
      // Assuming 'id' is the primary key of the User model

      data: {
        name,
        email,
        gender,
        phoneNumber,
        emailVerified,
        userImage,
        birthday:isoDateString, // Add the 'birthday' property here
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
    const currentUser = (await getServerSession(authOptions)) as { id?: string };


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
