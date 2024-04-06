import React from "react";

export default function CTA2() {
    return (
        <div className="flex justify-center items-center mb-[28px] bg-slate-50 overflow-hidden">
            <div className="relative w-[1400px] h-[300px] bg-slate-50 overflow-hidden z-0">
                <div className="absolute  z-0 ">
                    <img src="/purple-rectangle.svg" alt="Image 1" />
                    <div className="absolute top-4 left-[97px] text-white m-0 p-0">
                    <div className="flex items-center mb-2">
                        <img src="/logo-v1.svg" alt="Image 1" className="mr-2" />
                        <div className="font-space-grotesk text-[32px] font-bold" style={{ lineHeight: '1' }} >Get more TagaTalk <br/>updates!</div>
                    </div>
                    <div className="text-[14px] font-poppins mb-[15px] ml-[23px]">Receive updates and get to talk with the creators of TagaTalk.</div>
                    <img src="/join-discord.svg" alt="CTA1 Button" className="cursor-pointer h-[45px] w-[263px] m-0"  />
                </div>
                </div>
                <div className="absolute left-[642px] z-0">
                    <img src="/orange-rectangle.png" alt="Image 2" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <div className="text-[22px] font-poppins" style={{ letterSpacing: '4.02px', fontWeight: '500', lineHeight: '1' }}>Launching Soon</div>
                        <div className="font-sansita text-[62px] font-bold " style={{ lineHeight: '1' }}>TagaTalk<span className="text-[#FFDAAE]">.</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
