"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            console.log(data);

            router.push("/reset");
        } catch (error) {
            console.error("Error:", error);

            setMessage("An error occurred while processing your request");
        }
    };
    return (
        <div className='flex min-h-screen items-center justify-center bg-gray-100 '>
            <div className='p-8 border rounded-md bg-white shadow-lg max-w-md'>
                <div className='mb-4 flex justify-center relative'>
                    <Image
                        alt='Forgot Password Illustration'
                        height='120'
                        src='/fp.png'
                        style={{
                            aspectRatio: "120/120",
                            objectFit: "contain",
                        }}
                        width='120'
                    />
                </div>
                <h2 className='mb-2 text-center text-2xl font-bold'>
                    Forgot your password?
                </h2>
                <p className='mb-6 text-center text-sm text-gray-600 max-w-md'>
                    Enter your email or mobile number and we`ll help you reset
                    your password.
                </p>
                <form>
                    <div className='mb-4'>
                        <Input
                            className='bg-slate-400/10  border-none py-6'
                            placeholder='Enter Email or Mobile Number'
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            value={email}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Button onClick={handleSubmit}>Continue</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
