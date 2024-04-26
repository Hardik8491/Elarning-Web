import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
    const body=req.json()
    console.log(body);
    
    return new NextResponse("OK")

}
