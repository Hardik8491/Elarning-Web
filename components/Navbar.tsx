"use client";


import { ChevronLeft, HexagonIcon, MenuIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Button } from "./ui/button_student";
import { UserNav } from "./ui/user-nav";
import DashboardMenus from "@/utils/contstants";
const Navbar = () => {
  const path = usePathname();
  const { data: session, status } = useSession();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isProfileOpen && !event.target.closest(".profilebar")) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isProfileOpen]); // Dependency array ensures effect runs only when isOpen changes

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event: any) => {
      if (isSidebarOpen && !event.target.closest(".sidebar")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSidebarOpen]); // Dependency array ensures effect runs only when isSidebarOpen changes

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [session, status]);
  const handler = () => {
    signOut();
    toast.success("User Logout");
  };

  return (
    <nav className="bg-white py-4 top-0 left-0  fixed w-full border-b z-10 ">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex  items-center space-x-4">
          <div className="flex mr-4 items-center">
            <button
              className="md:hidden  focus:outline-none"
              onClick={toggleSidebar}
            >
              <MenuIcon className="h-6 w-6 mr-2 " />
            </button>
            <div>
              <Link href="/">
               
              <div className="flex items-center  text-white ">
                  <HexagonIcon className="text-[#bd1e59] hidden md:block h-8 w-8 mr-3" />
                  <div>
                    <p className="font-semibold text-lg text-black">EduTrack</p>
                    <p className="text-xs text-black hidden md:block ">Empowering Eduction through Data</p>
                  </div>
                  </div>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex lg:flex space-x-4">
            <Link href="/about" passHref>
              <p className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                Data Privacy
              </p>
            </Link>
            <Link href="/about" passHref>
              <p className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                Usage Policies
              </p>
            </Link>
            <Link href="/about" passHref>
              <p className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                About Us
              </p>
            </Link>
            <Link href="/contact" passHref>
              <p className="text-sm font-semibold text-gray-700 hover:text-gray-900">
                Contact Us
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          {isLoggedIn ? (
            <div>
              <UserNav />
            </div>
          ) : (
            <div className="space-x-2 flex items-center">
              <Link href="/auth/login">
                <Button className="hidden m:block" variant="ghost">
                  Login
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button>Sign Up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Sidebar */}

      <div
        className={`md:hidden sidebar fixed flex top-0 justify-between left-0 bg-white h-full w-60 shadow z-40 ${isSidebarOpen ? "translate-x-0" : "translate-x-[-100%] transition-all duration-500"}`}
      >
        <div className="flex flex-col h-screen text-white bg-white/75">
          <div className="p-4">
            <div className="flex items-center justify-between space-x-4  pb-4 pt-2">
              <Link href="/">
                <div className="flex items-center  text-white ">
                  <HexagonIcon className="text-[#bd1e59] h-8 w-8 mr-3" />
                  <div>
                    <p className="font-semibold text-lg text-black">EduTrack</p>
                  </div>
                </div>
              </Link>
              <div
                className="p-1 border cursor-pointer rounded-md "
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                <ChevronLeft className="text-gray-600 hover:text-gray-800 h-4 w-4 " />
              </div>
            </div>
            <div className="mt-5 flex  gap-49 flex-col space-y-2">
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
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
