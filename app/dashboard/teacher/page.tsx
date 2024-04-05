"use client";
import { Dashboard_Teacher } from "@/components/component/dahsboard-techer";
import React from "react";
import useAuthentication from "@/components/isAuth/IsAuth";
import { useSession } from "next-auth/react";
import { Toaster } from "react-hot-toast";

const Teacher = () => {
    const session = useSession();

    useAuthentication(session);

    return (
        <>
            <Dashboard_Teacher />
        </>
    );
};

export default Teacher;
