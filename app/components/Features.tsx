import React from 'react';
import Image from 'next/image';
export default function Features() {
  return (
    <div className="relative w-full h-[1072px]" style={{ background: "linear-gradient(to bottom, #f4f4f4, #F8FAFC)" }}>
        <div className="absolute top-0 right-0 mr-[120px] mt-[102px] text-right text-black z-10" style={{ width: '40%' }}>
            <p className="text-6xl font-bold font-space-grotesk">
            Awesome features of <span style={{ color: '#FD9F10' }}>TagaTalk.</span>
            </p>
        </div>
        <div className="absolute top-0 left-0 ml-[120px] mt-[102px] text-left text-black z-10" style={{ width: '29%' }}>
            <p className="text-[16px] font-poppins">
            <strong>TagaTalk<span className='text-orange-400'>.</span></strong> immerses yourself in interactive lessons, challenging exercises, and unique features, all crafted to meet the nuances of the Filipino <br/> language.
            </p>
        </div>
        <div className="absolute top-40 left-0 mt-40 ml-[120px] text-left text-black z-10" style={{ width: '19%' }}>
            <div style={{ marginLeft: '-30px' }}>
                <Image src="/flogo1.svg" alt="Logo" className="w-[150px] h-[80px] mb-4" />
            </div>
            <p className="font-bold font-poppins text-[18px] mb-2">Gamified Learning</p>
            <p className="text-sm font-poppins">Conquer challenges and improve as you dive into an immersive learning experience with TagaTalk’s gamified approach.</p>
        </div>
        <div className="absolute top-80 left-0 mt-80 ml-[120px] text-left text-black z-10" style={{ width: '22%' }}>
            <div style={{ marginLeft: '-30px' }}>
                <Image src="/flogo2.svg" alt="Logo 2" className="w-[150px] h-[80px] mb-4" />
            </div>
            <p className="font-bold font-poppins text-[18px] mb-2">Progress Tracking</p>
            <p className="text-sm font-poppins">Effortlessly monitor your language journey with our built-in progress tracking feature, keeping you motivated and informed every step of the way.</p>
        </div>
        <div className="absolute top-40 right-0 mt-40 mr-[120px] text-left text-black z-10" style={{ width: '19%' }}>
            <div style={{ marginLeft: '-30px' }}>
                <Image src="/flogo3.svg" alt="Logo 3" className="w-[150px] h-[80px] mb-4" />
            </div>
            <p className="font-bold font-poppins text-[18px] mb-2">Visual Narrative Sandbox</p>
            <p className="text-sm font-poppins">Unleash your creativity where you can craft captivating stories inspired by provided images, fostering imagination and language proficiency in an interactive environment.</p>
        </div>
        <div className="absolute top-80 right-0 mt-80 mr-[120px] text-left text-black z-10" style={{ width: '19%' }}>
            <div style={{ marginLeft: '-30px' }}>
                <Image src="/flogo4.svg" alt="Logo 4" className="w-[150px] h-[80px] mb-4" />
            </div>
            <p className="font-bold font-poppins text-[18px] mb-2">STREEAAAAAKS!!</p>
            <p className="text-sm font-poppins">I mean, who wouldn&apos;t want to brag about their epic login streaks? Dive in and keep the streak alive!</p>
        </div>
        <div className="flex items-center justify-center absolute top-12 left-0 w-full h-full z-20">
            <Image src="/fbgc1.svg" alt="Feature Image" className="w-[503] h-[526] z-0" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
                <Image src="/fphone1.svg" alt="Phone 1" className="w-[213px] h-[438px]" 
                    style={{ zIndex: 3, position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <Image src="/fphone2.svg" alt="Phone 2" className="w-[300px] h-[500px]" 
                    style={{ zIndex: 2, position: 'absolute', top: '58%', left: 'calc(50% + 120px)', transform: 'translate(-50%, -50%)' }} />
                <Image src="/fphone3.svg" alt="Phone 3" className="w-[250px] h-[auto]" 
                    style={{ zIndex: 1, position: 'absolute', top: '50%', left: 'calc(50% - 120px)', transform: 'translate(-50%, -50%)' }} />
            </div>
        </div>
    </div>
  );
}
