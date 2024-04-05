import Image from "next/image";
import React, { useEffect } from "react";

const Loading = () => {
    return (
        <div className='w-full min-h-screen h-full flex items-center justify-center '>
            <Image src='/study.gif' alt='Loader' width={600} height={800} />
        </div>
    );
};

export default Loading;
