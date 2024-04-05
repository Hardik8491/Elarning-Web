"use client";

import { ResetPassword } from "@/components/component/reset-password";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "../../../loading";

const ResetPasswordPage = () => {
    const router = useRouter();

    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    console.log(token);

    if (!token) {
        return (
            <div className='w-full h-screen flex items-center justify-center p-4'>
                <Loading />
            </div>
        );
    }

    return <ResetPassword token={token} />;
};

export default ResetPasswordPage;
