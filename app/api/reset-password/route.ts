// import jwt from "jsonwebtoken";
// import bcrypt from "bcryptjs";
// import { PrismaClient } from "@prisma/client";
// import { NextApiRequest, NextApiResponse } from "next";
// import { NextRequest, NextResponse } from "next/server";

// import { generateJWTSecret } from "@/lib/jwtUtils";
// const { secret } = generateJWTSecret();
// const prisma = new PrismaClient();

// // Interface for user object
// interface User {
//   id: number;
//   email: string;
//   password: string;
//   // Add other relevant user properties if needed
// }

// export  async function POST(req: Request, res:Response) {
//   try {
//     const body = (await req.json()) as { token: string; password: string };
//     const { token, password } = body;

//     // Verify the token
//     console.log(token);
//     console.log(secret)

//     const decoded = jwt.verify(token,"ad1cd53ca5b593ec1ac0") as User;

//     // Find user by email
//     const user = await prisma.user.findUnique({
//       where: {
//         email: decoded.email,
//       },
//     });

//     if (!user) {
//       return NextResponse.json({ message: "User not found" }, { status: 404 });
//     }

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Update user's password
//     await prisma.user.update({
//       where: {
//         id: user.id,
//       },
//       data: {
//         password: hashedPassword,
//       },
//     });

//     // Return success message
//     return NextResponse.json(
//       { message: "Password reset successfully" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "Invalid or expired token" },
//       { status: 400 }
//     );
//   }
// }

// pages/api/reset-password.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";

import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { token, password } = body;
  console.log(password);
  

  try {
    // Find the user associated with the reset token
    const resetToken = await prismadb.resetToken.findMany({
      where: { token: token }, // Replace tokenId with the actual ID of the reset token
    });

    console.log(resetToken[0].email);

    if (!resetToken) {
      return NextResponse.json(
        { message: "Invalid or expired token" },
        { status: 404 }
      );
    }

    // Check if the token has expired (You may want to implement token expiry logic)
    // const isExpired = checkTokenExpiry(resetToken.createdAt);
    // if (isExpired) {
    //   return res.status(400).json({ message: 'Token has expired' });
    // }

    // Find the user by email
    const user = await prismadb.user.findUnique({
      where: { email: resetToken[0].email },
    });
    console.log(user);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    

    // Update user's password
    const update = await prismadb.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });
  console.log(update);
  
    // Delete the reset token from the database
    const Delete = await prismadb.resetToken.deleteMany({ where: { token } });
console.log(Delete);
 
    return NextResponse.json(
      { message: "Password reset successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "An error occurred while processing your request", error },
      { status: 500 }
    );
  }
}
