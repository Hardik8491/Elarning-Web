import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="hidden lg:block h-screen xl:flex items-center w-full justify-center">
      {/* Replace with your actual image or animation */}
    <div className='h-full w-full '>
    <img src="/profile.png" alt="Login illustration" className="w-full h-full p-6 " />
    </div>
    </div>
  );
};

export default HeroImage;
