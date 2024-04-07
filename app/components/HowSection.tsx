import React from "react";

export default function HeroSection() {
    return (
        <div className="flex justify-center bg-[#1E1E1E]">
        <div className="w-full h-[805px] absolute flex items-center justify-center">
            <img src='/noise.svg' alt='Noise Background' className=' z-10' />
        </div>
            <div className="w-[1440px] h-[805px] relative flex justify-center bg-[#1E1E1E]">
                <div className="mt-[111px] w-[573px] text-center">
                    <span className="text-[#F4F4F4] text-6xl font-bold font-space-grotesk leading-[60px]">How does </span>
                    <span className="text-[#FD9F10] text-6xl font-bold font-space-grotesk underline leading-[60px]">TagaTalk.</span>
                    <span className="text-[#F4F4F4] text-6xl font-bold font-space-grotesk leading-[60px]"> work for you!</span>

                    <div className="w-[235px] left-[244px] top-[457px] absolute text-center text-gray-300 text-2xl font-medium font-poppins">Enhance Language Proficiency</div>
                    <div className="w-[219px] left-[610px] top-[457px] absolute text-center text-gray-300 text-2xl font-medium font-poppins">Cultivate Creative Expression</div>
                    <div className="w-[191px] left-[981px] top-[457px] absolute text-center text-gray-300 text-2xl font-medium font-poppins">Empower One's Confidence</div>
                </div>

                <img className="w-[70px] h-[80px] left-[1021px] top-[60px] absolute" src='/arrow3.svg' />

                <div className="z-20">
                    <div className="w-[81px] h-[81px] left-[321px] top-[358px] absolute bg-amber-500 rounded-full" />
                    <img className="w-[50px] h-[50px] left-[337px] top-[374px] absolute" src="/how1.svg" />

                    <div className="w-[81px] h-[81px] left-[679px] top-[358px] absolute bg-amber-500 rounded-full" />
                    <img className="w-[50px] h-[50px] left-[695px] top-[374px] absolute" src="/how2.svg" />

                    <div className="w-[81px] h-[81px] left-[1036px] top-[358px] absolute bg-amber-500 rounded-full" />
                    <img className="w-[50px] h-[50px] left-[1053px] top-[374px] absolute" src="/how3.svg" />
                </div>

                <div className="w-[282px] left-[221px] top-[554px] absolute text-center text-gray-300 text-base font-normal font-['Poppins']">TagaTalk offers interactive challenges and exercises tailored to improve your proficiency in Filipino, adapting to your skill level and goals for efficient progress.</div>
                <div className="w-[282px] left-[579px] top-[554px] absolute text-center text-gray-300 text-base font-normal font-['Poppins']">TagaTalk's sandbox feature allows free expression through writing stories in Filipino, fostering language proficiency and artistic development with feedback.</div>
                <div className="w-[282px] left-[936px] top-[554px] absolute text-center text-gray-300 text-base font-normal font-['Poppins']">TagaTalk boosts confidence in using Filipino through diverse interactive activities in a supportive environment, leading to significant improvement over time.</div>
            
                <img className="w-[127px] h-[34px] left-[470px] top-[375px] absolute" src='/arrow1.svg' />
                <img className="w-[127px] h-[34px] left-[840px] top-[375px] absolute" src='/arrow2.svg' />
            </div>
        </div>
    );
}