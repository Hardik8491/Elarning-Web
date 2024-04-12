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

    const { email } = validatedData;

    const existingUserByEmail = await prismadb.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = await prismadb.authUser.create({
      data: {
        email,
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

export async function GET(req:any) {
  try {
    const url = new URL(req.url);

    const searchParams = new URLSearchParams(url.search);

    const email = searchParams.get("email");
    console.log(email);
    
    const user = await prismadb.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(user);

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
