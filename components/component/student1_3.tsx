"use client"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { Progress } from '@chakra-ui/react';
import { useState } from 'react';
import Link from 'next/link';



export default function StudentList() {
  const [viewMode, setViewMode] = useState('grid');

  const toggleViewMode = () => {
    setViewMode(prevMode => (prevMode === 'grid' ? 'list' : 'grid'));
  };

  return (
    <div className="bg-white p-8">
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0 md:mr-4">Students</h1>
        <div className="flex items-center space-x-4">
          <Button className="bg-blue-500 text-white">+ ADD NEW</Button>
          <Button variant="ghost">Edit</Button>
          <Button variant="ghost">Remove</Button>
        </div>
      </div>
      <div className="mb-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-y-4 gap-2 md:space-y-0 md:space-x-4 md:w-auto">
          <Input placeholder="Search by faculty" className='mt-4' />
          <Select>
            <SelectTrigger id="department">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="science">Science</SelectItem>
              <SelectItem value="arts">Arts</SelectItem>
              <SelectItem value="commerce">Commerce</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="subject">
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="class">
              <SelectValue placeholder="All Class" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="class10">Class 10</SelectItem>
              <SelectItem value="class11">Class 11</SelectItem>
              <SelectItem value="class12">Class 12</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost">Grid</Button>
          <Button variant="ghost">List</Button>
        </div>
      </div>
      <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'} gap-4`}>
        <Card className="w-full">
          <CardContent>
            <div className="flex items-center justify-between">
              <Avatar>
                <AvatarImage alt="Hardik Bhammar" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>HB</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">RollNo: #21</div>
                <Progress className="w-16" value={88} />
              </div>
            </div>
            <div className="mt-4">
              <div className="font-bold">Hardik Bhammar</div>
              <div className="text-sm text-gray-600">Father Name 7777</div>
              <div className="text-sm text-gray-600">Birth Date</div>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              <Link href="/view">
                <span className="flex-1 flex gap-1 text-black">
                  View
                </span>
              </Link>
              <Button className="flex-1 flex gap-1 text-black" variant="ghost">
                Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <div className="flex items-center justify-between">
              <Avatar>
                <AvatarImage alt="huh5g21" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>H5</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">RollNo: #33</div>
                <Progress className="w-16" value={55} />
              </div>
            </div>
            <div className="mt-4">
              <div className="font-bold">huh5g21</div>
              <div className="text-sm text-gray-600">Father Name UnnadB3hai</div>
              <div className="text-sm text-gray-600">Birth Date</div>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              <Link href="/view">
                <span className="flex-1 flex gap-1 text-black">
                  View
                </span>
              </Link>
              <Button className="flex-1 flex gap-1 text-black" variant="ghost">
                Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardContent>
            <div className="flex items-center justify-between">
              <Avatar>
                <AvatarImage alt="rma kumar" src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>RK</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-semibold">RollNo: #33</div>
                <Progress className="w-16" value={55} />
              </div>
            </div>
            <div className="mt-4">
              <div className="font-bold">rma kumar</div>
              <div className="text-sm text-gray-600">Father Name UnnadB3hai</div>
              <div className="text-sm text-gray-600">Birth Date</div>
            </div>
            <div className="mt-4 flex justify-center space-x-2">
              <Link href="/view">
                <span className="flex-1 flex gap-1 text-black">
                  View
                </span>
              </Link>
              <Button className="flex-1 flex gap-1 text-black" variant="ghost">
                Feedback
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


function EyeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function MessageSquareIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
