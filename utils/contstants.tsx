import {
    LayoutDashboard,
    FileEdit,
    StepForward,
    Activity,
    Menu,
    Pi,
    User,
    Settings,
} from "lucide-react";
const DashboardMenus = [
    {
        href: "/dashboard/teacher",
        text: "Dashboard",
        icon: <LayoutDashboard className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/assessments",
        text: "Assessment",
        icon: <FileEdit className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/students",
        text: "Student Progress",
        icon: <StepForward className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/students/progress",
        text: "Skill Progress",
        icon: <Activity className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/students",
        text: "Students",
        icon: <Menu className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/students/manage",
        text: "Manage Students",
        icon: <Pi className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/profile",
        text: "My Profile",
        icon: <User className='h-4 w-4 ml-2 ' />,
    },
    {
        href: "/dashboard/settings",
        text: "Settings",
        icon: <Settings className='h-4 w-4 ml-2 ' />,
    },
];
export default DashboardMenus;
