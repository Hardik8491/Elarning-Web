import { sendMail } from "@/lib/emailUtil";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, subject, message } = body;
    console.log(email, subject, message);

    await sendMail(
      // "TEST",
      // "hardikbhammar88@gmail.com",
      // "THI IS A TEST FOR MY MEDIUM USERS"
      subject,
      email,
      message,
      fullName
    );

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while processing the request", error },
      { status: 500 }
    );
  }
}
