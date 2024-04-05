import crypto from "crypto";
import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import prisma from "@/lib/prisma";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  },
});

export default async function forgotPassword(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email } = req.body;

    // Check if the email exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate a secure random token
    const resetToken = crypto.randomBytes(20).toString("hex");

    // Store the reset token in the database
    await prisma.resetToken.create({
      data: {
        email,
        token: resetToken,
        createdAt: new Date(),
      },
    });

    // Send the password reset email
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Password Reset Request",
      html: `
          <p>You have requested to reset your password. Click the link below to reset it:</p>
          <a href="${process.env.NEXT_PUBLIC_URL}/reset-password?token=${resetToken}">Reset Password</a>
        `,
    };

    await transporter.sendMail(mailOptions);

    return res
      .status(201)
      .json({
        success: true,
        message: "Password reset email sent successfully",
      });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({
        message: "An error occurred while processing your request",
        error,
      });
  }
}
