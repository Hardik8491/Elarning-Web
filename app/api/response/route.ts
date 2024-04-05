import { authOptions } from "@/lib/auth";
import prismadb from "@/lib/prismadb";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const formData = body;

  
    

    const questionsData: { question: string; responses: string[] }[] = formData.questions.map((questionItem: { question: string; response: string[] }) => {
      const { question, response } = questionItem;
      return {
      question,
      responses: response,
      };
    });


    const response = await prisma.response.create({
      data: {
        responseQuestion: {
          create: questionsData,
        },
        studentId:formData.studentId,
      },
      include: {
        responseQuestion: true,
      },
    });
  

    // Return the created response

    return NextResponse.json(
      { response, message: "response created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the request", error },
      { status: 500 }
    );
  }
}
