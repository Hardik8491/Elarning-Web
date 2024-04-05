"use client";
import React, { useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import HeroImage from "@/components/HeroImage";
import LoginCard from "@/components/LoginCard";
import { LoginPages } from "@/components/component/login-page";
import { redirect, useRouter } from "next/navigation";
import useWarningToast from "@/lib/warningToast";
import toast from "react-hot-toast";
import { RegisterCard } from "@/components/component/register-card";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = () => {
    const session = useSession();

    useEffect(() => {
        if (session.status === "authenticated") {
            toast.success("Login Successful !!");
            redirect("/");
        }
    }, [session.status]);

    return (
        <>
            <RegisterCard />
        </>
    );
};

export default LoginPage;
