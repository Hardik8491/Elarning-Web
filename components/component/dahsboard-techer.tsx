"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Progress } from "@chakra-ui/react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { HexagonIcon } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button1";
import { Badge } from "../ui/badge";
import { usePathname } from "next/navigation";
import Image from "next/image";
import DashboardMenus from "@/utils/contstants";

export function Dashboard_Teacher() {
    const path = usePathname();

    return (
        <main className='flex-1 p-4 overflow-hidden'>
            <header className='flex justify-between items-center mb-6'>
                <h1 className='text-2xl font-bold'>Dashboard</h1>
                <div className='flex items-center space-x-4'>
                    <Input
                        className='w-full md:w-96'
                        placeholder='Search for Students, Programs, Assignment...'
                        type='search'
                    />
                </div>
            </header>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='bg-white p-4 rounded-md'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Class Statistics
                    </h2>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex flex-col items-center relative'>
                            <Image
                                alt='Total Students'
                                className='mb-2'
                                height='80'
                                src='/placeholder.svg'
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width='80'
                            />
                            <span className='text-3xl font-bold'>100</span>
                            <span className='text-sm text-gray-600'>
                                Total Students
                            </span>
                        </div>
                        <div className='flex flex-col items-center relative'>
                            <Image
                                alt='Struggling Students'
                                className='mb-2'
                                height='80'
                                src='/placeholder.svg'
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width='80'
                            />
                            <span className='text-3xl font-bold text-red-500'>
                                40
                            </span>
                            <span className='text-sm text-gray-600'>
                                Struggling
                            </span>
                        </div>
                        <div className='flex flex-col items-center relative'>
                            <Image
                                alt='Excelling Students'
                                className='mb-2'
                                height='80'
                                src='/placeholder.svg'
                                style={{
                                    aspectRatio: "80/80",
                                    objectFit: "cover",
                                }}
                                width='80'
                            />
                            <span className='text-3xl font-bold text-green-500'>
                                60
                            </span>
                            <span className='text-sm text-gray-600'>
                                Excelling
                            </span>
                        </div>
                    </div>
                    <div className='bg-blue-100 p-4 rounded-md mb-4'>
                        <div className='flex justify-between items-center'>
                            <span className='font-semibold'>
                                Class Progress
                            </span>
                            <span>30% of the progress</span>
                        </div>
                        <Progress className='w-full mt-2' value={30} />
                    </div>
                    <Button className='w-full'>View Details</Button>
                </div>
                <div className='bg-white p-4 rounded-md'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Overall Class Performance
                    </h2>
                    <PieChart className='w-full h-[200px]' />
                    <div className='grid grid-cols-2 md:flex justify-around items-center mt-4'>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Advanced
                            </Badge>
                            <span>50%</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Intermediate
                            </Badge>
                            <span>30%</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Basic
                            </Badge>
                            <span>10%</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Proficient
                            </Badge>
                            <span>20%</span>
                        </div>
                    </div>
                    <Button className='w-full mt-4'>View Details</Button>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                <div className='bg-white p-4 rounded-md'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Struggling & Excelling
                    </h2>
                    <div className='mb-4'>
                        <h3 className='text-sm font-semibold text-red-500 mb-2'>
                            Bottom 3 Struggling
                        </h3>
                        <div className='space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <Avatar>
                                    <AvatarImage
                                        alt='Wong Lee'
                                        src='/placeholder.svg?height=40&width=40'
                                    />
                                </Avatar>
                                <div>
                                    <span className='font-semibold'>
                                        Wong Lee
                                    </span>
                                    <p className='text-sm text-gray-600'>
                                        Political Science, Math
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Avatar>
                                    <AvatarImage
                                        alt='Sarah Nancy'
                                        src='/placeholder.svg?height=40&width=40'
                                    />
                                </Avatar>
                                <div>
                                    <span className='font-semibold'>
                                        Sarah Nancy
                                    </span>
                                    <p className='text-sm text-gray-600'>
                                        Science, Biology
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Avatar>
                                    <AvatarImage
                                        alt='Nate Gill'
                                        src='/placeholder.svg?height=40&width=40'
                                    />
                                </Avatar>
                                <div>
                                    <span className='font-semibold'>
                                        Nate Gill
                                    </span>
                                    <p className='text-sm text-gray-600'>
                                        Math, Biology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-sm font-semibold text-green-500 mb-2'>
                            Top 3 Excelling
                        </h3>
                        <div className='space-y-2'>
                            <div className='flex items-center space-x-2'>
                                <Avatar>
                                    <AvatarImage
                                        alt='Post Malone'
                                        src='/placeholder.svg?height=40&width=40'
                                    />
                                </Avatar>
                                <div>
                                    <span className='font-semibold'>
                                        Post Malone
                                    </span>
                                    <p className='text-sm text-gray-600'>
                                        History, English
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <Avatar>
                                    <AvatarImage
                                        alt='Clara Garcia'
                                        src='/placeholder.svg?height=40&width=40'
                                    />
                                </Avatar>
                                <div>
                                    <span className='font-semibold'>
                                        Clara Garcia
                                    </span>
                                    <p className='text-sm text-gray-600'>
                                        Science, Hindi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button className='w-full mt-4'>View</Button>
                </div>
                <div className='bg-white p-4 text-xs rounded-md'>
                    <h2 className='text-lg font-semibold mb-4'>
                        Performance Summary
                    </h2>
                    <BarChart className='w-full h-[200px]' />
                    <div className='grid md:grid-cols-2 justify-around items-center gap-4 mt-4'>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Proficient
                            </Badge>
                            <span>Average Proficiency</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Lagging
                            </Badge>
                            <span>20 Students/20%</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                On Track
                            </Badge>
                            <span>20 Students/20%</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Completed
                            </Badge>
                            <span>60 Students/60%</span>
                        </div>
                        <div className='flex items-center'>
                            <Badge className='mr-2' variant='secondary'>
                                Ahead
                            </Badge>
                            <span>20 Students/20%</span>
                        </div>
                    </div>
                    <Button className='w-full mt-4'>View Details</Button>
                </div>
            </section>
        </main>
    );
}

function PieChart(props: any) {
    return (
        <div {...props}>
            <ResponsivePie
                data={[
                    { id: "Jan", value: 111 },
                    { id: "Feb", value: 157 },
                    { id: "Mar", value: 129 },
                    { id: "Apr", value: 150 },
                    { id: "May", value: 119 },
                    { id: "Jun", value: 72 },
                ]}
                sortByValue
                margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                cornerRadius={0}
                padAngle={0}
                borderWidth={1}
                borderColor={"#ffffff"}
                enableArcLinkLabels={false}
                arcLabel={(d) => `${d.id}`}
                arcLabelsTextColor={"#ffffff"}
                arcLabelsRadiusOffset={0.65}
                colors={["#2563eb"]}
                theme={{
                    labels: {
                        text: {
                            fontSize: "18px",
                        },
                    },
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                }}
                role='application'
            />
        </div>
    );
}

function BarChart(props: any) {
    return (
        <div {...props}>
            <ResponsiveBar
                data={[
                    { name: "Jan", count: 111 },
                    { name: "Feb", count: 157 },
                    { name: "Mar", count: 129 },
                    { name: "Apr", count: 150 },
                    { name: "May", count: 119 },
                    { name: "Jun", count: 72 },
                ]}
                keys={["count"]}
                indexBy='name'
                margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
                padding={0.3}
                colors={["#2563eb"]}
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 16,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickValues: 4,
                    tickPadding: 16,
                }}
                gridYValues={4}
                theme={{
                    tooltip: {
                        chip: {
                            borderRadius: "9999px",
                        },
                        container: {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            borderRadius: "6px",
                        },
                    },
                    grid: {
                        line: {
                            stroke: "#f3f4f6",
                        },
                    },
                }}
                tooltipLabel={({ id }) => `${id}`}
                enableLabel={false}
                role='application'
                ariaLabel='A bar chart showing data'
            />
        </div>
    );
}
