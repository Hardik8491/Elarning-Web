"use client";

import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

import Button from "@/components/ui/Button1";
import { useRouter } from "next/navigation";

import { useSession } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";

const cloudinaryCloudName = "dctww9bm8"; // Replace with your Cloudinary cloud name
const uploadPreset = "Image_upload"; // Replace with your Cloudinary upload preset
interface Student {
  id: string;
  name: string;
  image: string;
  grade: number;
  enrollmentNo: number;
  mobileNumber: number;
  fatherName: string;
  birthdate: string;
  email: string;
}

const NewStudent: React.FC = () => {
  const router = useRouter();
  // const {email}=useUserData();

  const { data: session } = useSession();
  const email = session?.user?.email;

  const [students, setStudents] = useState<Student[]>([]);
  const [newStudent, setNewStudent] = useState<Student>({
    id: "",
    name: "",
    image: "", // Store image URL from Cloudinary
    grade: 0,
    enrollmentNo: 0,
    mobileNumber: 0,
    fatherName: "",
    birthdate: "",
    email: "",
  });
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form fields
    if (
      !newStudent.name.trim() ||
      !newStudent.image.trim() ||
      !newStudent.grade ||
      !newStudent.enrollmentNo ||
      !newStudent.fatherName.trim() ||
      !newStudent.mobileNumber ||
      !newStudent.birthdate
    ) {
      toast.error("Please fill out all fields");

      return;
    }

    try {
      // Send student data to your backend API to save in the database
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      });

      if (response.ok || response.status == 201) {
        // Redirect to the student list page after successful creation
        toast.success("successful completeed ")
      } else {
        toast.error("Failed to create student")
        throw new Error("Failed to create student");

      }
      router.refresh();
      router.push(`/dashboard/students`);
    } catch (error) {
      console.error("Error creating student:", error);
      toast.error("Error creating student");
    }
  };

  // Function to handle image upload to Cloudinary
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    }
    formData.append("upload_preset", uploadPreset);

    try {
      // Upload image to Cloudinary
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudinaryCloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const data = await response.json();
        toast.success("Student create Successfully")
        // Update the state with the image URL returned by Cloudinary
        setNewStudent({ ...newStudent, image: data.secure_url });
      } else {
        toast.error("Failed to upload image to Cloudinary")
        throw new Error("Failed to upload image to Cloudinary");

      }
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
      toast.error("Failed to upload image to Cloudinary")
    }
  };

  // Function to handle changes in form inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  return (
    <div className="container mx-auto text-black p-4 bg-white w-full min-h-screen h-full">
      <Toaster/>
      <hr className="my-2 mb-6 " />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold ">Create New Student</h1>
          <p className="text-gray-600">Add a new Student </p>
        </div>
      </div>
      <hr className="mb-10 " />

      <form onSubmit={handleSubmit} className="mb-4  w-full gap-10">
        <div className="mb-4  gap-10 w-full grid grid-cols-3">
          <div className="flex flex-col py-2 ">
            <label htmlFor="Name">FullName</label>
            <input
              type="text"
              name="name"
              value={newStudent.name}
              onChange={handleChange}
              className="border rounded px-2 py-2 mr-2 my-2"
              placeholder="Enter student name"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="Name">StudentImage</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload} // Handle image upload
              className="border rounded px-2 py-2 mr-2 my-2"
            />

            {newStudent.image && (
              <CldImage
                src={newStudent.image}

                width="100"
                height="100"
                crop="scale"
                alt={""}
              />
            )}
          </div>
          <div className="flex flex-col py-2 ">
            <label htmlFor="Name">fatherName</label>
            <input
              type="text"
              name="fatherName"
              value={newStudent.fatherName}
              onChange={handleChange}
              className="border rounded px-2 py-2 mr-2 my-2"
              placeholder="Enter student name"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label htmlFor="Name">Grade</label>
            <input
              type="number"
              name="grade"
              pattern="[0-9]*"
              step="00.01"
              maxLength={6}
              max={100}
              min={0}
              value={newStudent.grade}
              onChange={handleChange}
              className="border rounded px-2 py-2 mr-2 my-2"
              placeholder="Enter student grade"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="Name">EnrollmentNo</label>
            <input
              type="number"
              pattern="[0-9]*"
              maxLength={12}
              name="enrollmentNo"
              value={newStudent.enrollmentNo}
              onChange={handleChange}
              className="border rounded px-2 py-2 mr-2 my-2"
              placeholder="Enter student enrollment number"
            />
          </div>

          <div className="flex flex-col py-2">
            <label htmlFor="Name">MobileNumber</label>
            <input
              type="text"
              name="mobileNumber"
              maxLength={12}
              minLength={10}
              pattern="[0-9]*"
              value={newStudent.mobileNumber}
              onChange={handleChange}
              className="border rounded px-2 py-2 mr-2 my-2"
              placeholder="Enter student mobile number"
            />
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="Name">BirthDate</label>
            <input
              type="date"
              name="birthdate"
              value={newStudent.birthdate}
              onChange={handleChange}
              className="border rounded px-2 py-2 mr-2 my-2"
              placeholder="Enter student mobile number"
            />
          </div>
        </div>
        <Button className="my-4">Create</Button>
      </form>
    </div>
  );
};

export default NewStudent;
