import React from "react";

export default function HeroSection() {
    return (
        <div className="flex justify-center items-center bg-slate-50 overflow-hidden">
            <div className="relative w-[1440px] h-[660px] bg-slate-50 overflow-hidden">
                <div className="w-[378px] h-6 left-[129px] top-[344px] absolute bg-amber-500 bg-opacity-60 rounded-[29.12px]" />
                <div className="w-[644px] left-[121px] top-[403px] absolute text-black text-lg font-medium font-poppins">Take the first step in transforming your language skills with TagaTalk. Dive in and experience the difference today!</div>
                <div className="w-[686px] left-[120px] top-[70px] absolute text-black text-[88px] font-bold font-space-grotesk leading-[100px]">Improve Filipino Fluency with TagaTalk!</div>
                <div className="w-[686px] left-[120px] top-[495px] absolute">
                    <img src='/join-waitlist-v1-btn.svg' alt='Join Waitlist' className='w-[183] h-[45px] absolute cursor-pointer' />
                </div>
                <div className="left-[957px] top-[20px] absolute">
                    <img src='/homescreen-mockup.png' alt='Homescreen Mockup' className='w-auto h-[640px] ' />
                </div>
                <div className="left-[868px] top-[30px] absolute">
                    <img src='/handdrawn-effects-hero.svg' alt='Floating Activity' className=' z-10' />
                </div>
                <div className="w-[248.50px] h-[223.26px] left-[832px] top-[133px] absolute">
                    <img src='/game-hero.svg' alt='Floating Activity' className='p-6 absolute z-10' />
                    <div className="w-[248.50px] h-[223.26px] left-0 top-0 absolute bg-white bg-opacity-80 rounded-[19.41px] shadow-lg backdrop-blur-[87.36px]" />
                </div>
            </div>
        </div>
    );
}