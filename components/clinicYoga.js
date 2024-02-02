// components/HeroSection.js
import React from 'react';
import ImageAndText from './imageAndText';
import '../styles/clinicYoga.css'
const ClinicYoga = () => {
  return (
    <div className=" back2 min-h-screen w-screen flex items-center justify-center " >
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-9 mx-auto my-28">Wellness Clinic & Yoga Studio
          Victoria, BC</h1>
        <div className="bg-white mx-auto p-4 w-[80%] rounded-md">
          <ImageAndText />
        </div>
        <div className='curvedBottom'></div>
      </div>
     
    </div>
  );
};

export default ClinicYoga;
