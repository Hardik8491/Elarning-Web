
import { signOut, useSession, } from "next-auth/react";


const ProfileCard = () => {
    const session = useSession();



    return (
        <div className="text-black px-4 flex flex-col z-50 ">
            <h2>
                {session.data?.user?.name}
            </h2>
            <h1>{session.data?.user?.email}</h1>

        </div>
    );
};

export default ProfileCard;
