import { CloudIcon, LockIcon, SettingsIcon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export function HomeBar() {
    return (
        <div className='bg-[#f0f2f5] w-full'>
            <section className='container mx-auto mt-12 px-4'>
                <div className='h-auto md:h-[80vh] p-4 md:p-8 flex flex-col md:flex-row  gap-8 py-2  items-center'>
                    <div className='flex flex-col gap-6'>
                        <h1 className='text-4xl md:text-6xl font-bold text-gray-900 md:mb-4'>
                            Uncover Student Potential with Data Insights
                        </h1>
                        <p className='text-lg text-gray-700 md:mb-4'>
                            Empower educators with invaluable student data
                            insights. Transform learning outcomes through
                            informed analysis.
                        </p>
                        <p className='text-sm md:mb-6'>
                            Navigate student success with precision through
                            insightful data analysis. Uncover hidden potentials,
                            tailor learning experiences, and pave the way for
                            academic excellence.
                        </p>
                        <div className='flex space-x-4 mb-6'>
                            <Button className='border-black border active:text-black active:bg-transparent visited:bg-transparent'>
                                Explore More
                            </Button>
                            <Button variant='outline' className='p-3 border'>
                                Watch how it works
                            </Button>
                        </div>
                    </div>

                    <div className='h-[50vh] md:h-[70vh] w-full object-cover relative rounded-md mb-6 shadow-md md:shadow-xl shadow-gray-600'>
                        <Image
                            alt='Student'
                            className='rounded-lg'
                            src='/platform.png'
                            fill
                        />
                    </div>
                </div>
            </section>
            <section className='bg-white py-12'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
                        Our Success
                    </h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
                        <div>
                            <p className='text-5xl font-bold text-[#bd1e59]'>
                                15K+
                            </p>
                            <p className='text-lg text-gray-700'>Students</p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#bd1e59]'>
                                75%
                            </p>
                            <p className='text-lg text-gray-700'>
                                Total success
                            </p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#bd1e59]'>
                                35
                            </p>
                            <p className='text-lg text-gray-700'>
                                Main questions
                            </p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#bd1e59]'>
                                26
                            </p>
                            <p className='text-lg text-gray-700'>
                                Chief experts
                            </p>
                        </div>
                        <div>
                            <p className='text-5xl font-bold text-[#bd1e59]'>
                                16
                            </p>
                            <p className='text-lg text-gray-700'>
                                Years of experience
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-12'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-gray-900 mb-6 text-center'>
                        All-In-One Cloud Software
                    </h2>
                    <p className='text-lg text-gray-700 mb-6 text-center'>
                        TOTC is one powerful online software suite that combines
                        all the tools needed to run a successful school or
                        office.
                    </p>
                    <div className='flex justify-center space-x-4'>
                        <CloudIcon className='h-12 w-12 text-[#bd1e59]' />
                        <SettingsIcon className='h-12 w-12 text-[#bd1e59]' />
                        <LockIcon className='h-12 w-12 text-[#bd1e59]' />
                    </div>
                </div>
            </section>
        </div>
    );
}
