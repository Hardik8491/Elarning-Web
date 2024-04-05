"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { FileEditIcon, SearchIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import moment from "moment";
export function Assessment_DashBoard() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/Questionnaire"); // Replace with your actual API endpoint
                if (!response.ok) {
                    throw new Error(
                        `API request failed with status ${response.status}`
                    );
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Fetch data on component mount
    }, []);

    return (
        <div className='flex flex-col min-h-screen w-full mt-4'>
            <header className='flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40'>
                <div className='w-full flex-1'>
                    <form>
                        <div className='relative'>
                            <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400' />
                            <Input
                                className='w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950'
                                placeholder='Search exams...'
                                type='search'
                            />
                        </div>
                    </form>
                </div>
            </header>
            <main className='flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6'>
                <div className='border rounded-lg shadow-sm'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className='w-[100px]'>
                                    {" "}
                                    Exam ID
                                </TableHead>
                                <TableHead>Exam Name</TableHead>
                                <TableHead className='hidden md:table-cell'>
                                    Start Time
                                </TableHead>
                                <TableHead className='hidden md:table-cell'>
                                    End Time
                                </TableHead>
                                <TableHead>Age</TableHead>
                                <TableHead className='w-[100px]'>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data &&
                                data.map((exam: any) => (
                                    <TableRow key={exam.id}>
                                        <TableCell className='truncate max-w-32'>
                                            {exam.id || "EXM001"}
                                        </TableCell>
                                        <TableCell className='font-medium'>
                                            {exam.questionName ||
                                                " Physics Midterm"}
                                        </TableCell>
                                        <TableCell className='hidden md:table-cell'>
                                            {moment(exam.startDateTime).format(
                                                "llll"
                                            ) || "10:00 AM, 25th March 2024"}
                                        </TableCell>
                                        <TableCell className='hidden md:table-cell'>
                                            {moment(exam.endDateTime).format(
                                                "llll"
                                            ) || "11:00 AM, 25th March 2024"}
                                        </TableCell>
                                        <TableCell>{exam.age || "5"}</TableCell>
                                        <TableCell className='grid grid-cols-[1fr_1fr] gap-2'>
                                            <Button
                                                className='w-8 h-8'
                                                size='icon'
                                                variant='ghost'
                                            >
                                                <FileEditIcon className='w-4 h-4' />
                                                <span className='sr-only'>
                                                    Edit
                                                </span>
                                            </Button>
                                            <Button
                                                className='w-8 h-8'
                                                size='icon'
                                                variant='ghost'
                                            >
                                                <TrashIcon className='w-4 h-4' />
                                                <span className='sr-only'>
                                                    Delete
                                                </span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center'>
                    <Link
                        className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                        href='/dashboard/assessments/create'
                    >
                        New Exam
                    </Link>
                </div>
            </main>
        </div>
    );
}
