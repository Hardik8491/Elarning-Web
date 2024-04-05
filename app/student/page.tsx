"use client";
import { StudentDashboard } from "@/components/component/studentDashboard_01";
import React from "react";
import useAuthentication from "@/components/isAuth/IsAuth";
import { useSession } from "next-auth/react";

const Student = () => {
  const session = useSession();
  useAuthentication(session);
  return (
    <div>
      <StudentDashboard />
    </div>
  );
};

export default Student;
