"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const useUser = () => {
  const { data: session } = useSession();

  const [user, setUser] = useState();

  const getUserDetails = async () => {
    const email = session?.user?.email  ;
    if (!email) return;
    await fetch(`/api/user?email=${email}`) // Pass email as a query parameter
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getUserDetails();
  }, [session]);

  return { user };
};

export default useUser;
