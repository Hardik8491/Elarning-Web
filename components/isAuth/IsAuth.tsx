"use client"
import Loading from "@/app/loading";
import useWarningToast from "@/lib/warningToast";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
// Import your Loading component

const useAuthentication = (session: { status: unknown }) => {
  const router = useRouter();
  const showWarningToast=useWarningToast();


  useEffect(() => {
    if (session.status === "unauthenticated") {
      showWarningToast("Login First !!")
      redirect("/auth/login")

    }
  }, [session.status]);

  if (session.status === "loading") {
   
    return <Loading />;
  }

  // You can return additional data or components if needed
  return null;
};

export default useAuthentication;
