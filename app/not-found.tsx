"use client";
import Button from "@/components/ui/Button1";
import Container from "@/components/ui/container";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen w-full">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="text-md font-semibold text-gray-600 mb-10">
            <span className="pr-4">Home</span>
            <span>/</span>

            <span className="text-black px-4">404 Error</span>
          </div>

          <div className="flex flex-col justify-center items-center mt-20 text-black gap-10">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium text-center">404 Not Found</h1>
            <span className="text-center">The page you`re looking for doesn`t exist. You may go back to the home page.</span>

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
}
