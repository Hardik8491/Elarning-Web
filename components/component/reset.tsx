import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Reset() {
    return (
        <div className='min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
            <div className=' bg-white p-8 border border-gray-300 rounded-lg shadow-md max-w-md'>
                <div className='mb-8 flex justify-center relative'>
                    <Image
                        alt='Password Reset'
                        className='w-42 h-42'
                        height='192'
                        src='/fp.png'
                        style={{
                            aspectRatio: "192/192",
                            objectFit: "contain",
                        }}
                        width='192'
                    />
                </div>
                <h2 className='mb-6 text-center text-2xl font-extrabold text-gray-900'>
                    Check your email
                </h2>

                <p className='mb-4 text-sm text-gray-600'>
                    If you have any further questions or concerns, feel free to
                    contact us.
                </p>
                <p className='mb-6 text-sm text-gray-600'>
                    Thank you for using our services!
                </p>
                <div className='flex justify-center'>
                    <Link href='/login'>
                        <Button className='w-full' variant='default'>
                            Log in now
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
