"use client"
import React from 'react';
import { useRouter } from "next/navigation";

interface HomePageProps {}


const HomePage: React.FC<HomePageProps> = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row min-h-screen w-full "> 
      <div className="flex bg-blue-600 h-screen  scale-4 transform translate-x[-50] rounded-b-[45%] py-20 justify-around w-full">
         <div  className='flex-1 px-12 flex justify-center gap-2 items-start flex-col'>
            <h2 className='text-4xl font-extrabold text-white'><span className='text-orange-600'>Studing</span> Online Now</h2>
             <h2 className='text-4xl font-extrabold text-white'>Musch Essior</h2>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum exercitationem magni unde eligendi?</p>
             <div className='flex items-center justify-center gap-4 text-black'>
              <button onClick={()=>router.push("/login")} className='rounded-full py-2 px-5 bg-gray-200 '>Join Free</button>
              <button onClick={()=>router.push("/login")} className='rounded-full py-2 px-5 bg-gray-200 '>Join Free</button>
             </div>
         </div>
         <div className='flex-1 px-1   items-center flex justify-center '>
         <img src="/heroImage.png" alt="" className='opacity-90 object-cover ' />
         </div>
      </div>
    </div>
  );
};

export default HomePage;
