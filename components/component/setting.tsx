import {
    CardTitle,
    CardDescription,
    CardHeader,
    CardContent,
    Card,
} from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import { Toggle } from "@/components/ui/toggle";
import {
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
    SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    PopoverTrigger,
    PopoverContent,
    Popover,
} from "@/components/ui/popover";
import {
    BookIcon,
    ChevronDownIcon,
    Delete,
    DeleteIcon,
    Edit,
    HelpCircleIcon,
    KeyIcon,
    LogOutIcon,
    MessageCircleQuestion,
    TrashIcon,
    UserIcon,
    UserPlusIcon,
} from "lucide-react";
import Image from "next/image";

export function Setting() {
    return (
        <div className='flex-1'>
            <div className='grid gap-6'>
                <Card>
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                        <CardDescription>
                            Update your profile information.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='flex gap-4 items-start'>
                        <Avatar className='w-24 h-24 relative'>
                            <Image
                                alt='Avatar'
                                className='rounded-full border border-gray-200 object-cover'
                                height='200'
                                src='/placeholder.svg'
                                style={{
                                    aspectRatio: "40/40",
                                    objectFit: "cover",
                                }}
                                width='200'
                            />
                        </Avatar>
                        <div className='grid gap-1.5 '>
                            <Link
                                className='font-semibold dark:text-gray-400'
                                href='#'
                            >
                                <Edit />
                            </Link>
                            <Link
                                className='font-semibold dark:text-gray-400'
                                href='#'
                            >
                                <TrashIcon />
                            </Link>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Language</CardTitle>
                        <CardDescription>
                            Select your preferred language.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Select>
                            <SelectTrigger>
                                {/* <Toggle> */}
                                <div>
                                    <div className='text-sm font-medium leading-none'>
                                        English
                                    </div>
                                </div>
                                {/* </Toggle> */}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='en'>
                                    <div>English</div>
                                </SelectItem>
                                <SelectItem value='es'>
                                    <div>Spanish</div>
                                </SelectItem>
                                <SelectItem value='fr'>
                                    <div>French</div>
                                </SelectItem>
                                <SelectItem value='de'>
                                    <div>German</div>
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Font Size</CardTitle>
                        <CardDescription>
                            Adjust the font size to your preference.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex items-center gap-4'>
                            <Label htmlFor='font-size'>
                                <div className='text-sm w-20 font-medium leading-none'>
                                    Font size
                                </div>
                            </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select font size' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='sm'>
                                        <div>Small</div>
                                    </SelectItem>
                                    <SelectItem value='md'>
                                        <div>Medium</div>
                                    </SelectItem>
                                    <SelectItem value='lg'>
                                        <div>Large</div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Theme</CardTitle>
                        <CardDescription>
                            Choose between light and dark themes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex items-center gap-4'>
                            <Label htmlFor='theme'>
                                <div className='text-sm font-medium leading-none'>
                                    Theme
                                </div>
                            </Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder='Select theme' />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='light'>
                                        <div>Light</div>
                                    </SelectItem>
                                    <SelectItem value='dark'>
                                        <div>Dark</div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>
                            Manage your notification preferences.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='grid gap-4'>
                            <div>
                                <Label>
                                    <div>
                                        <div>
                                            <Toggle />
                                            <div />
                                            <span className='ml-2 text-sm font-medium sm:text-base'>
                                                Email notifications
                                            </span>
                                        </div>
                                        <div>
                                            <Toggle />
                                            <div />
                                            <span className='ml-2 text-sm font-medium sm:text-base'>
                                                Push notifications
                                            </span>
                                        </div>
                                        <div>
                                            <Toggle />
                                            <div />
                                            <span className='ml-2 text-sm font-medium sm:text-base'>
                                                SMS notifications
                                            </span>
                                        </div>
                                    </div>
                                </Label>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>App Version</CardTitle>
                        <CardDescription>
                            View information about the app version.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='grid gap-2'>
                            <Label>
                                <div className='font-medium leading-none'>
                                    Version
                                </div>
                            </Label>
                            <div>1.2.0</div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Help & Support</CardTitle>
                        <CardDescription>
                            Access help documentation or contact support.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='flex justify-between'>
                            <Link className='flex items-center gap-2' href='#'>
                                <BookIcon className='w-4 h-4' />
                                <span className='underline'>Documentation</span>
                            </Link>
                            <Link className='flex items-center gap-2' href='#'>
                                <HelpCircleIcon className='w-4 h-4' />
                                <span className='underline'>
                                    Contact Support
                                </span>
                            </Link>
                            <Link
                                className='flex items-center gap-2'
                                href='/faq'
                            >
                                <MessageCircleQuestion className='w-4 h-4' />
                                <span className='underline'>FAQ</span>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Feedback</CardTitle>
                        <CardDescription>
                            Provide feedback or submit bug reports.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className='grid gap-4'>
                                <div>
                                    <Label htmlFor='feedback'>
                                        <div className='font-medium leading-none'>
                                            Feedback
                                        </div>
                                    </Label>
                                    <Textarea
                                        className='mt-1'
                                        id='feedback'
                                        placeholder='Enter your feedback'
                                    />
                                </div>
                                <div>
                                    <Label>
                                        <div className='font-medium leading-none'>
                                            Additional comments
                                        </div>
                                    </Label>
                                    <Textarea
                                        className='mt-1'
                                        id='comments'
                                        placeholder='Enter additional comments'
                                    />
                                </div>
                                <Button type='submit'>Submit</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className='w-10 h-10 rounded-full border'
                        variant='ghost'
                    >
                        <ChevronDownIcon className='w-4 h-4' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent align='end' className='w-64'>
                    <div>
                        <div>
                            <UserIcon className='mr-2 h-4 w-4' />
                            <Link href='#'> Settings</Link>
                        </div>
                        <div>
                            <KeyIcon className='mr-2 h-4 w-4' />
                            <Link href='#'> Change Password</Link>
                        </div>
                        <div>
                            <UserPlusIcon className='mr-2 h-4 w-4' />
                            <Link href='#'> Invite Friends</Link>
                        </div>
                        <div>
                            <HelpCircleIcon className='mr-2 h-4 w-4' />
                            <Link href='#'> Support</Link>
                        </div>
                        <div>
                            <LogOutIcon className='mr-2 h-4 w-4' />
                            <Link href='#'> Logout</Link>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
