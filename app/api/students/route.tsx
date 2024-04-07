//@ts-nocheck
import { authOptions } from "@/lib/auth";

import prismadb from "@/lib/prismadb";
import { Router } from "lucide-react";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const data = await getSession();
   


    const body = await req.json();
    const currentUser: { id?: string } = (await getServerSession(
      authOptions
    )) as { id?: string };
 
    const {
      name,
      image,
      grade,
      enrollmentNo,
      fatherName,
      mobileNumber,
      birthdate,
     
    } = body;

  
    const date = new Date(birthdate);
    const isoDateString = date.toISOString();


    const userId = currentUser.user?.id;
    console.log(userId);
    

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!name) {
      return new NextResponse("naem is required", { status: 400 });
    }

    if (!image) {
      return new NextResponse("Image URL is required", { status: 400 });
    }

    if (!grade) {
      return new NextResponse("grade is required", { status: 400 });
    }
    if (!enrollmentNo) {
      return new NextResponse("enrollmentNo is required", { status: 400 });
    }
    if (!mobileNumber) {
      return new NextResponse("mobileNumber required", { status: 400 });
    }
    if (!fatherName) {
      return new NextResponse("fatherName is required", { status: 400 });
    }
    if (!birthdate) {
      return new NextResponse("birthdate is required", { status: 400 });
    }

    // Create the student in the database
    const createdStudent = await prismadb.student.create({
      data: {
        name,
        image,
        grade,
        enrollmentNo,
        fatherName,
        mobileNumber,
        userId,
        birthdate: isoDateString,
      },
    });

 
    return NextResponse.json(
      { student: createdStudent, message: "Student Created Successfully" },
      { status: 201 }
    );
  } catch (error) {
    // Handle errors
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
export async function GET() {
  try {
    const currentUser: { id?: string } = (await getServerSession(
      authOptions
    )) as { id?: string };
   


    const student = await prismadb.student.findMany({
      where: {
        userId: currentUser?.user?.id || null,
      },
    });

    return NextResponse.json(student);
  } catch (error) {
    console.log("[student_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
