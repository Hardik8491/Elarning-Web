/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8PbhQIClw8T
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";
import { Button } from "../ui/button_student";

export default function StudentSection() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Students</h1>
            <div className="mt-1 flex items-center text-sm text-gray-600">
              <span>10</span>
              <span className="ml-2">Selected Students</span>
            </div>
            <p className="text-sm text-gray-500">manage student your class</p>
          </div>
          <div className="flex space-x-3">
            <Button className="bg-blue-500 text-white">Grid</Button>
            <Button className="bg-gray-300 text-gray-700">List</Button>
            <Button className="bg-green-500 text-white">+ ADD NEW</Button>
          </div>
        </div>
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Input placeholder="Search byName" />
          <Select>
            <SelectTrigger id="department">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="department1">Department 1</SelectItem>
              <SelectItem value="department2">Department 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="subject">
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="subject1">Subject 1</SelectItem>
              <SelectItem value="subject2">Subject 2</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger id="class">
              <SelectValue placeholder="All Class" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="class1">Class 1</SelectItem>
              <SelectItem value="class2">Class 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="w-full bg-white shadow">
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage
                    alt="Student Avatar"
                    src="/placeholder.svg?height=100&width=100"
                  />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Hardik Bhammar</h3>
                  <p className="text-sm text-gray-500">Father Name</p>
                  <p className="text-sm text-gray-500">7777</p>
                </div>
                <div className="ml-auto space-y-1">
                  <Badge variant="secondary">88%</Badge>
                  <p className="text-sm   border-black text-gray-500">Birth Date</p>
                  <p className="text-sm text-gray-500">7777</p>
                </div>
              </div>
              <div className="mt-4 flex  justify-center space-x-2">
                <Button
                  className="flex-1 flex gap-1 text-black "
                  variant="ghost"
                >
                  <EyeIcon className="mr-2 text-black" />
                  View{"\n                          "}
                </Button>
                <Button
                  className="flex-1 flex gap-1  text-black "
                  variant="ghost"
                >
                  <MessageSquareIcon className="mr-2" />
                  Feedback{"\n                          "}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

function EyeIcon(props:any) {
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

function MessageSquareIcon(props:any) {
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
