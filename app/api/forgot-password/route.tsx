// // pages/api/forgot-password.js

// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// import crypto from "crypto";
// import { generateJWTSecret } from "@/lib/jwtUtils";

// const { secret, expiry } = generateJWTSecret();

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.NODEMAILER_EMAIL,
//     pass: process.env.NODEMAILER_PW,
//   },
// });

// export async function POST(req: Request, res: Response) {
//   try {
//     const body = await req.json();
//     const { email } = body;
//     console.log(email);

//     // Generate JWT token with a 10-minute expiration
//     const token = jwt.sign({ email }, secret, {
//       expiresIn: "10m",
//     });

//     // Send the password reset email
//     const mailOptions = {
//       from: process.env.NODEMAILER_EMAIL,
//       replyTo: process.env.NODEMAILER_EMAIL,
//       subject: "Password Reset Request",
//       html: `
//           <p>You have requested to reset your password. Click the link below to reset it:</p>
//           <a href="${process.env.HOST}/reset-password?token=${token}">Reset Password</a>
//         `,
//     };

//     await transporter.sendMail(mailOptions);

//     return NextResponse.json(
//       { message: "Password reset email sent successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "An error occurred while processing your request", error },
//       { status: 500 }
//     );
//   }
// }
// pages/api/forgot-password.js

import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import crypto from "crypto";

import prismadb from "@/lib/prismadb";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PW,
  },
});

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();
    const { email } = body;
    console.log(email);

    // Check if the email exists in the database
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });
    console.log(existingUser);

    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Generate a secure random token
    const Token = crypto.randomBytes(20).toString("hex");
    if (!prismadb.resetToken) {
      console.log("prisma resetToken model is not defined");
      
      return NextResponse.json({ message: "Prisma resetToken model is not defined" },{status:404});
    }

    // Store the reset token in the database
    const res = await prismadb.resetToken.create({
      data: {
        email,
        token: Token,
        createdAt: new Date(),
      },
    });

    console.log(res);

    const htmlTemplate = `<html>
    <head>
        <style>
            body {
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                background-color: #8ca9c537;
                justify-content: center;
                font-family: 'Times New Roman', Times, serif;
    
    
            }
    
            /* CSS styles for formatting */
            .container {
                background-color: white;
                box-shadow: #4800ffc5;
                display: flex;
               
                border-radius: 5px;
                padding: 20px;
                margin: 40px;
                flex-direction: column;
    
                justify-content: center;
                align-items: start;
            }
    
            .logo {
                max-width: 100px;
                display: flex;
                justify-content: start;
                align-items: center;
                color: #4800ffc5;
                font-weight: bold;
                font-family: 'Times New Roman', Times, serif;
                font-style: normal;
                /* Adjust as needed */
            }
    
            .card {
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 10px;
                margin-bottom: 10px;
                flex: 1;
                /* Distribute remaining space evenly */
                margin-left: 20px;
                /* Add space between logo and content */
            }
    
            .TextCard {
                font-family: 'Times New Roman', Times, serif;
                font-style: normal;
                color: gray;
                font-size: large;
            }
    
            .label {
                font-weight: bold;
            }
    
            .logo {
                padding: 2px;
            }
            .button{
                font-family: 'Times New Roman', Times, serif;
                font-style: normal;
                font-weight: bold;
                color: white;
                font-size:medium;
                padding: 6px 14px;
                width: fit-content;
                border:1px solid black;
                border-radius: 4px;
                background-color: #4800ffc5;
                text-decoration: none;
                text-decoration-line: none;
                text-decoration-style: none;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="logo">
                <h2>TOTC</h2>
            </div>
            <div class="TextCard">
                <p>Hello</p>
                <p> We received a request to reset the password for the Stripe account<br />
                    associated with <a class="text-link" href=${email}>${email}</a>.</p>
                <a href="${process.env.NEXT_PUBLIC_URL}/reset-password?token=${Token}">
                    <div  class="button">Reset your password</div>
                </a>
                <p>
                    If you didn't make this request, or if you're having trouble signing in, contact us via our support
                    site. No changes have been made to your account.
                </p>
                <p>-The TOTC team</p>
            </div>
        </div>
        </div>
    </body>
    
    </html>`;
    // Send the password reset email
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email, // Add recipient's email address here
      replyTo: process.env.NODEMAILER_EMAIL,
      subject: "Password Reset Request",
      html: htmlTemplate,
    };
 console.log(mailOptions);
 
    const password = await transporter.sendMail(mailOptions);
    console.log(password);
    

    return NextResponse.json(
      { success: true, message: "Password reset email sent successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while processing your request", error },
      { status: 500 }
    );
  }
}
