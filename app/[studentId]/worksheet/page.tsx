"use client";
import Button from "@/components/ui/Button1";
import Container from "@/components/ui/container";
import { Download, Eye, MessageSquareText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const WorkSheets = () => {
  const params = useParams();
  //  studentId: params.studentId,
  return (
    <div className="bg-white min-h-screen w-full">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className=" flex flex-col w-full border bg-white  rounded-md ">
            <div className="flex justify-around p-4 w-full">
              <div className="relative">
                <Image
                  src="/platform.png"
                  alt=""
                  height={75}
                  width={75}
                  className="rounded-full aspect-square object-cover object-center bg-blue-200 p-1"
                />
              </div>
              <div className="flex flex-col items-start justify-between ">
                <h2>Worksheet Name</h2>
                <span>skills</span>
                <p>SubSkills</p>
                <p>Difficulty laval</p>
              </div>
            </div>
            <div className="py-2  bg-blue-50 w-full ">
              <div className=" text-gray-700 justify-around  flex px-6 items-center">
                <Link href="/student">
                  <button className="flex items-center text-xs font-semibold justify-center gap-1">
                    <span>
                      <Download />
                    </span>
                    Download
                  </button>
                </Link>
                <button
                  className="flex items-center text-xs font-semibold justify-center gap-1"
                  // onClick={() => router.push(`/${student.id}/assessment`)}
                >
                  <span>
                    <MessageSquareText />
                  </span>
                  Feedback
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-20 text-black gap-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-center">
              No WorkSheet Left !!
            </h1>
            {/* <span className="text-center">No WorkSheet Left !!</span> */}
            <p>{params.studentId}</p>

            <Link href="/">
              <Button className="active:bg-transparent active:border active:border-black active:text-black">
                Back to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkSheets;
