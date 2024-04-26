import prismadb from "@/lib/prismadb";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
export async function GET(req: Request, res: Response) {
  try {
    const url = new URL(req.url);

    const searchParams = new URLSearchParams(url.search);
console.log(searchParams);
console.log(url);

    const questionnaireId = searchParams.get("questionnaireId");

    const questionnaire = await prismadb.question.findMany({
      where: {
        questionnaireId: questionnaireId || undefined,
      },
    });

    return NextResponse.json(questionnaire, { status: 200 });
  } catch (error) {
    console.log("[question_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
