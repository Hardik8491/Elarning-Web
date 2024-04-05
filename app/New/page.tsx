"use client";
import StudentSection from '@/components/component/student-section'
import React from 'react'
import useAuthentication from '@/components/isAuth/IsAuth';
import { useSession } from 'next-auth/react';

const New = () => {
  const session = useSession();
  useAuthentication(session);
  return (
    <>
    <StudentSection/>
    </>
  )
}

export default New