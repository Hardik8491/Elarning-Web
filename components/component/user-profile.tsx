"use client";

// Import necessary modules and components
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import Switch from "react-switch";

import Button from "@/components/ui/Button1";

// import { toast } from "react-toastify";

// Define UserProfile component
export default function UserProfile() {
    const [user, setUser] = useState({
        name: "",
        email: "",

        gender: "",
        language: "",
        country: "",
        password: "",
        birthday: "",
        emailNotification: false,
        privateAccount: false,
    });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        gender: "",
        birthday: "",
        language: "",
        country: "",
        phoneNumber: "",
        password: "",
        newPassword: "",
        confirmPassword: "",
        emailNotification: false,
        privateAccount: false,
    });

    useEffect(() => {
        fetch("/api/user")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setUser(data.user),
                    setFormData({
                        ...data.user,
                        newPassword: "", // Resetting newPassword and confirmPassword fields
                        confirmPassword: "",
                    });
            })
            .catch((error) => {
                console.error(
                    "There was a problem with your fetch operation:",
                    error
                );
            });
    }, []);

    const handleOnChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (fieldName: any, value: any) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };
    const [isCheckedEmailNotification, setIsCheckedEmailNotification] =
        useState(false);

    const handleEmailNotificationSwitch = (checked: any) => {
        setIsCheckedEmailNotification(checked);
        setFormData((prevData) => ({
            ...prevData,
            emailNotification: checked,
        }));
    };
    const [isChecked, setIsChecked] = useState(formData.privateAccount);

    const handleSwish = (checked: any) => {
        setIsChecked(checked);
        setFormData((prevData) => ({
            ...prevData,
            privateAccount: checked,
        }));
    };

    // Handle saving changes
    const handleSaveChanges = () => {
        fetch("/api/user", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    toast.success("User info updated successfully");
                } else {
                    console.error("Failed to update user information");
                    toast.error("Failed to update user information");
                }
            })
            .catch((error) => {
                console.error("Error updating user information:", error);
                toast.error("Failed to update user information");
            });
    };

    // Render the UserProfile form
    return (
        <div className='bg-gray-100 px-2 md:px-4 w-full'>
            <div className=' mx-auto bg-white p-6 rounded-lg shadow w-full'>
                <div className='w-full md:w-full '>
                    <h2 className='text-2xl md:text-3xl font-semibold '>
                        My Profile
                    </h2>
                </div>
                <div className='flex flex-col md:flex-row mt-6 w-full'>
                    <main className='w-full md:w-full'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div>
                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='username'
                                    >
                                        Name
                                    </label>
                                    <Input
                                        id='username'
                                        name='name'
                                        autoComplete='false'
                                        value={formData.name}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='email'
                                    >
                                        Email
                                    </label>
                                    <Input
                                        id='email'
                                        name='email'
                                        value={formData.email}
                                        defaultValue={user?.email}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='gender'
                                    >
                                        Gender
                                    </label>
                                    <Select
                                        value={formData.gender}
                                        onValueChange={(value) =>
                                            handleSelectChange("gender", value)
                                        }
                                    >
                                        <SelectTrigger id='gender'>
                                            <SelectValue>
                                                {formData.gender
                                                    ? formData.gender
                                                    : "Select..."}
                                            </SelectValue>
                                        </SelectTrigger>
                                        <SelectContent position='popper'>
                                            <SelectItem value='male'>
                                                Male
                                            </SelectItem>
                                            <SelectItem value='female'>
                                                Female
                                            </SelectItem>
                                            <SelectItem value='other'>
                                                Other
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='birthday'
                                    >
                                        birthday
                                    </label>
                                    <Input
                                        id='birthday'
                                        name='birthday'
                                        placeholder='Birthday'
                                        type='date'
                                        value={formData?.birthday?.substring(
                                            0,
                                            10
                                        )}
                                        defaultValue={user?.birthday}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='language'
                                    >
                                        Language
                                    </label>
                                    <Select
                                        value={formData.language}
                                        onValueChange={(value) =>
                                            handleSelectChange(
                                                "language",
                                                value
                                            )
                                        }
                                    >
                                        <SelectTrigger id='language'>
                                            <SelectValue>
                                                {formData.language
                                                    ? formData.language
                                                    : "Select..."}
                                            </SelectValue>
                                            <SelectValue placeholder='Select Language' />
                                        </SelectTrigger>
                                        <SelectContent position='popper'>
                                            <SelectItem value='english'>
                                                English
                                            </SelectItem>
                                            <SelectItem value='spanish'>
                                                Spanish
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className='flex flex-col'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='country'
                                    >
                                        Country
                                    </label>
                                    <Select
                                        value={formData.country}
                                        onValueChange={(value) =>
                                            handleSelectChange("country", value)
                                        }
                                    >
                                        <SelectTrigger id='country'>
                                            <SelectValue>
                                                {formData.country
                                                    ? formData.country
                                                    : "Select..."}
                                            </SelectValue>
                                            <SelectValue placeholder='Select Country' />
                                            <SelectValue
                                                defaultValue={formData.country}
                                            />
                                        </SelectTrigger>
                                        <SelectContent position='popper'>
                                            <SelectItem value='united-states'>
                                                United States
                                            </SelectItem>
                                            <SelectItem value='canada'>
                                                Canada
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Add other input fields similarly */}
                            </div>
                            <div>
                                {/* <div className="space-y-2">
                  <Label htmlFor="image">Profile Picture</Label>
                  <Input id="image" required type="file" />
                </div> */}
                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='email'
                                    >
                                        phoneNumber
                                    </label>
                                    <Input
                                        id='phoneNumber'
                                        placeholder='+1 1234567890'
                                        name='phoneNumber'
                                        // Make sure the name attribute is "phoneNumber"

                                        type='number'
                                        value={formData.phoneNumber}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='current-password'
                                    >
                                        Current Password
                                    </label>
                                    <Input
                                        id='current-password'
                                        name='password'
                                        placeholder='Current Password'
                                        type='password'
                                        value={formData.password}
                                        onChange={handleOnChange}
                                    />
                                </div>

                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='new-password'
                                    >
                                        New Password
                                    </label>
                                    <Input
                                        id='new-password'
                                        name='newPassword'
                                        placeholder='New Password (4-32 alphabets or numerics)'
                                        type='password'
                                        value={formData.newPassword}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className='flex flex-col mb-4'>
                                    <label
                                        className='mb-1 font-medium'
                                        htmlFor='confirm-password'
                                    >
                                        Confirm Password
                                    </label>
                                    <Input
                                        id='confirm-password'
                                        name='confirmPassword'
                                        placeholder='Confirm Password'
                                        type='password'
                                        value={formData.confirmPassword}
                                        onChange={handleOnChange}
                                    />
                                </div>
                                <div className='flex items-center mb-4'>
                                    <Switch
                                        id='email-notification'
                                        name='emailNotification'
                                        checked={isCheckedEmailNotification}
                                        onChange={handleEmailNotificationSwitch}
                                        onColor='#4F46E5'
                                        offColor='#ccc'
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        height={24}
                                        width={48}
                                    />
                                    <label
                                        className='ml-2 font-medium'
                                        htmlFor='email-notification'
                                    >
                                        Email notification
                                    </label>
                                </div>
                                <div className='flex items-center mb-4'>
                                    <Switch
                                        id='private-Account'
                                        name='private-Account'
                                        checked={isChecked}
                                        onChange={handleSwish}
                                        onColor='#4F46E5'
                                        offColor='#ccc'
                                        uncheckedIcon={false}
                                        checkedIcon={false}
                                        height={24}
                                        width={48}
                                        handleDiameter={20}
                                    />
                                    <label
                                        className='ml-2 font-medium'
                                        htmlFor='private-account'
                                    >
                                        Private Account
                                    </label>
                                </div>
                                {/* <CardContent className="flex items-center space-y-0">
                  <img
                    alt="Profile Picture"
                    className="rounded-full"
                    height={40}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "40/40",
                      objectFit: "cover",
                    }}
                    width={40}
                  />
                  <div>Your profile picture will be updated after saving the form.</div>
                </CardContent> */}
                                <Button
                                    className='w-full'
                                    onClick={handleSaveChanges}
                                >
                                    Save Changes
                                </Button>
                                {/* Add other input fields similarly */}
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
