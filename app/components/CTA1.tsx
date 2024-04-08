import React from "react";
import Image from 'next/image';
export default function CTA1() {
    return (
        <div className="flex justify-center mb-[26px] bg-slate-50 overflow-hidden">
            <div className="w-[1400px] h-[416px] relative bg-stone-900 rounded-[20px] overflow-hidden">
                <div className="w-[573px] left-[100px] top-[80px] absolute">
                    <span className="text-zinc-100 text-6xl font-bold font-space-grotesk leading-[60px]">Ready to embark on a new journey with </span>
                    <span className="text-amber-500 text-6xl font-bold font-space-grotesk leading-[60px]">TagaTalk?</span>
                </div>
                <div className="left-[100px] top-[298px] absolute cursor-pointer">
                    <Image src="/join-waitlist-v2-btn.svg" alt="CTA1 Button" />
                </div>
                <div className="w-[400px] h-[800px] left-[820px] top-[70px] absolute">
                <Image src="/start-cta1.svg" alt="Feature Image" className="z-0"/>
                    <Image src="/landing-mockup.svg" alt="Phone 1" className="w-auto h-auto" 
                        style={{ zIndex: 3, position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                    <Image src="/homescreen-mockup-v2.svg" alt="Phone 2" className="w-[400px] h-[700px]" 
                        style={{ zIndex: 2, position: 'absolute', top: '50%', left: 'calc(45% + 120px)', transform: 'translate(-50%, -50%)' }} />
                    <Image src="/game-mockup.svg" alt="Phone 3" className="w-[380px] h-[700px]" 
                        style={{ zIndex: 1, position: 'absolute', top: '56%', left: 'calc(45% - 120px)', transform: 'translate(-50%, -50%)' }} />
                </div>
            </div>
        </div>
        
    );
}