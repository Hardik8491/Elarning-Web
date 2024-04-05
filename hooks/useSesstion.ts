"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const useUserData = () => {
  // State variables for email and name
  const [email, setEmail] = useState("");
  const [name, setName] = useState<string>("");
  const { data: session, status } = useSession();

  // Simulated fetch user data function
  const fetchUserData = async () => {
    // Simulated asynchronous operation, replace it with your actual logic

    setEmail(session?.user?.email ?? "");
    setName(session?.user?.name ?? "");
  };

  // Fetch user data when component mounts
  useEffect(() => {
    fetchUserData();
  }, []); // Empty dependency array to run effect only once

  // Return email and name for component consumption
  return { email, name, status };
};

export default useUserData;
