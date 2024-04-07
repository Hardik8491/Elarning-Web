"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button1";
import { Eye, GraduationCap, MessageSquareText } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useAuthentication from "@/components/isAuth/IsAuth";
import { useSession } from "next-auth/react";
import Image from "next/image";

interface Student {
    id: string;
    name: string;
    grade: string;
    enrollmentNo: string;
    mobileNumber: string;
    image: string;
    birthdate: string;
    fatherName: string;
    userId: string;
}

const StudentsPage: React.FC = () => {
    const [isGrid, setIsGrid] = useState(true);

    const router = useRouter();
    const session = useSession();
    useAuthentication(session);
    const [students, setStudents] = useState<Student[]>([]);

    const [newStudent, setNewStudent] = useState<Student>({
        id: "",
        name: "",
        grade: "",
        enrollmentNo: "",
        mobileNumber: "",
        image: "",
        birthdate: "",
        fatherName: "",
        userId: "",
    });
    useEffect(() => {
        // Fetch student data

        fetch("/api/students")
            .then((response) => response.json())
            .then((data) => setStudents(data))
            .catch((error) => console.error("Error fetching students:", error));
    }, []);

    const [inputValue, setInputValue] = useState("");
    const [isPlaceholderHidden, setIsPlaceholderHidden] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Simulate fetching student data
                const response = await fetch("/api/students");
                const data = await response.json();
                setStudents(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching student data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='container mx-auto text-black p-4  bg-gray-50 w-full min-h-screen h-full'>
            <hr className='my-2 mb-6 ' />
            <header className='flex items-center justify-between  sm:items-center sm:justify-between sm:flex-row md:flex-row md:items-center md:justify-between sm:mb-8'>
                <div className='mb-4 md:mb-0 md:mr-4'>
                    <h1 className='text-2xl font-bold'>Students</h1>
                    <div className='flex items-center text gap-2'>
                        <h2 className='text-xl font-semibold'>
                            {students.length}
                        </h2>
                        <span className='flex text-blue-700 font-semibold items-center gap-1'>
                            <GraduationCap /> {/* Render GraduationCap icon */}
                            Selected Students
                        </span>
                    </div>
                    <p className='text-gray-400 text-xs'>
                        manage student your class
                    </p>
                </div>

                <div className='text-md mb-8  text-blue-700 hidden sm:flex items-center gap-6  md:mb-0'>
                    <p
                        onClick={() => setIsGrid(true)}
                        className={`${isGrid ? "px-2 border-b-2 font-bold border-blue-600" : "px-2 border-b-0  border-blue-600"}`}
                    >
                        Grid
                    </p>
                    <p
                        onClick={() => setIsGrid(false)}
                        className={`${!isGrid ? "px-2 font-bold border-b-2 border-blue-600" : "px-2  border-b-0 border-blue-600"}`}
                    >
                        List
                    </p>
                </div>

                <div>
                    <button
                        className='px-6 md:px-8 font-semibold text-sm py-2 rounded-md border bg-white text-blue-600'
                        onClick={() =>
                            router.push(`/dashboard/students/add`)
                        }
                    >
                        + ADD NEW
                    </button>
                </div>
            </header>
            <div className='w-full flex items-center justify-center sm:hidden'>
                <div className='text-md  text-blue-700 flex items-center gap-6 mb-4 md:mb-0'>
                    <p
                        onClick={() => setIsGrid(true)}
                        className={`${isGrid ? "px-2 border-b-2 font-bold border-blue-600" : "px-2 border-b-0  border-blue-600"}`}
                    >
                        Grid
                    </p>
                    <p
                        onClick={() => setIsGrid(false)}
                        className={`${!isGrid ? "px-2 font-bold border-b-2 border-blue-600" : "px-2  border-b-0 border-blue-600"}`}
                    >
                        List
                    </p>
                </div>
            </div>
            <div className='mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                <Input placeholder='Search by faculty' />
                <Select>
                    <SelectTrigger id='department'>
                        <SelectValue placeholder='All Departments' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                        <SelectItem value='department1'>
                            Department 1
                        </SelectItem>
                        <SelectItem value='department2'>
                            Department 2
                        </SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger id='subject'>
                        <SelectValue placeholder='All Subjects' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                        <SelectItem value='subject1'>Subject 1</SelectItem>
                        <SelectItem value='subject2'>Subject 2</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger id='class'>
                        <SelectValue placeholder='All Class' />
                    </SelectTrigger>
                    <SelectContent position='popper'>
                        <SelectItem value='class1'>Class 1</SelectItem>
                        <SelectItem value='class2'>Class 2</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {students.length !== 0 ? (
                <ul
                    className={`${isGrid ? "grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 " : "flex flex-col"}`}
                >
                    {students &&
                        students.map((student, idx) => (
                            <div
                                key={idx}
                                onClick={() =>
                                    router.push(
                                        `/${student.id}/worksheet`
                                    )
                                }
                                className=' flex flex-col w-full border bg-white  rounded-md active:border-2 hover:border-blue-400 hover:border-2 active:border-black'
                            >
                                <div className='flex p-4 w-full'>
                                    <div className='relative'>
                                        <Image
                                            src={student.image}
                                            alt=''
                                            height={75}
                                            width={75}
                                            className='rounded-full aspect-square object-cover object-center bg-blue-200 p-1'
                                        />
                                    </div>
                                    <div className='flex  px-1 w-full flex-col items-center gap-2'>
                                        <div className='flex w-full items-start gap-4 justify-between px-2'>
                                            <div className='flex flex-col items-start gap-2'>
                                                <p className='text-xs text-gray-600 font-semibold'>
                                                    RollNo: #
                                                    {student.enrollmentNo}
                                                </p>
                                                <h2 className='text-black font-bold'>
                                                    {student.name}
                                                </h2>
                                            </div>
                                            <span className='px-2 py-1 rounded-xl text-sm bg-blue-100 text-blue-700'>
                                                {student.grade}%
                                            </span>
                                        </div>
                                        <div className='w-full  px-2'>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex flex-col items-start gap-1'>
                                                    <p className='text-xs text-gray-600 font-semibold'>
                                                        Father Name
                                                    </p>
                                                    <h2 className='text-black text-sm font-medium'>
                                                        {student.fatherName}
                                                    </h2>
                                                </div>
                                                <div>
                                                    <p className='text-xs text-gray-600 font-semibold'>
                                                        Birth Date
                                                    </p>
                                                    <h2 className='text-black text-sm font-medium'>
                                                        {student.birthdate?.substring(
                                                            0,
                                                            10
                                                        )}
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='py-2  bg-blue-50 w-full '>
                                    <div className=' text-gray-700 justify-around  flex px-6 items-center'>
                                        <Link href='/student'>
                                            <button className='flex items-center text-xs font-semibold justify-center gap-1'>
                                                <span>
                                                    <Eye />
                                                </span>
                                                View
                                            </button>
                                        </Link>
                                        <button
                                            className='flex items-center text-xs font-semibold justify-center gap-1'
                                            onClick={() =>
                                                router.push(
                                                    `/${student.id}/assessment`
                                                )
                                            }
                                        >
                                            <span>
                                                <MessageSquareText />
                                            </span>
                                            Feedback
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                </ul>
            ) : (
                <div className='h-full flex items-center justify-center flex-col'>
                    <h2 className='sm:text-2xl   md:text-5xl p-10 font-black'>
                        {" "}
                        No Student Found
                    </h2>
                    <div>
                        <Button
                            onClick={() =>
                                router.push(`/dashboard/students/add`)
                            }
                        >
                            ADD Students
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default StudentsPage;
