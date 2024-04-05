"use client";
import UserProfile from "@/components/component/user-profile";
import useAuthentication from "@/components/isAuth/IsAuth";
import { useSession } from "next-auth/react";

import React from "react";

const MyProfile = () => {
    const session = useSession();
    useAuthentication(session);
    return <UserProfile />;
};

export default MyProfile;
