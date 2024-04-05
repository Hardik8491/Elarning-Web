"use client";
import DashboardMenus from "@/utils/contstants";
import { HexagonIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardTeacherLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    return (
        <div className='min-h-screen bg-gray-100 p-2 md:flex'>
            <aside className='w-full hidden md:block  md:w-64 md:min-h-screen bg-white p-4'>
                <Link href='/'>
                    <div className='flex mr-4 my-2 items-center'>
                        <HexagonIcon className='text-[#bd1e59] h-8 w-8 mr-3' />
                        <div>
                            <p className='font-semibold text-black text-lg'>
                                EduTrack
                            </p>
                        </div>
                    </div>
                </Link>
                <nav className='space-y-2'>
                    {DashboardMenus.map((menu: any) => (
                        <Link
                            key={menu.href}
                            className={`flex items-center space-x-2 p-2 rounded-md text-gray-700 hover:bg-gray-200 ${path === menu.href ? "bg-gray-200" : ""}`}
                            href={menu.href}
                        >
                            {menu.icon}
                            <span>{menu.text}</span>
                        </Link>
                    ))}
                </nav>
            </aside>
            {children}
        </div>
    );
}
