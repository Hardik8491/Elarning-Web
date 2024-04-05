//@ts-nocheck
import { authOptions } from "@/lib/auth";
import prismadb from "@/lib/prismadb";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
    try {
        const currentUser: any = await getServerSession(authOptions);
        const userId: string | undefined = currentUser?.user?.id?.toString();
        const questionnaireData = await prismadb.questionnaire.findMany({
            where: {
                userId: userId,
            },
        });

        return NextResponse.json(questionnaireData);
    } catch (error) {
        console.log("[student_GET]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}

export async function POST(req: Request, res: Response) {
    try {
        const currentUser: { id?: number | null | undefined } | null =
            await getServerSession(authOptions);

        const userId: number | null | undefined = currentUser?.user?.id ?? null;

        const body = await req.json();

        const formData: any[] = body;

        const date = new Date(formData?.startDateTime);
        const startDateTime = date.toISOString();

        const date01 = new Date(formData?.endDateTime);
        const endDateTime = date01.toISOString();

        if (!userId) {
            return new NextResponse("Unauthenticated", { status: 403 });
        }

        const questionsData = formData.questions.map((questionItem: any) => {
            const { question, options, type, skills } = questionItem;
            return {
                question,
                options,
                type,
                skills,
            };
        });

        const newQuestionnaire = await prisma.questionnaire.create({
            data: {
                questions: {
                    create: questionsData,
                },
                age: formData?.age,
                questionName: formData?.questionnaireName,
                userId: userId.toString(),
                startDateTime: startDateTime,
                endDateTime: endDateTime,
            },
            include: {
                questions: true,
            },
        });

        return NextResponse.json(
            {
                questionnaire: newQuestionnaire,
                message: "Questionnaire created successfully",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json(
            {
                message: "An error occurred while processing the request",
                error,
            },
            { status: 500 }
        );
    }
}
