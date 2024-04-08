import React from "react";
import Image from 'next/image';

export default function AboutUs() {
    return (
        <div className="flex justify-center bg-slate-50">
            <div className="w-[1440px] h-[817px] relative flex justify-center bg-slate-50">
                <div className="w-[510px] top-[148px] left-[120px] absolute">
                    <span className="text-black text-6xl font-bold font-space-grotesk leading-[60px]">About </span>
                    <span className="text-amber-500 text-6xl font-bold font-space-grotesk leading-[60px]">the team </span>
                    <span className="text-black text-6xl font-bold font-space-grotesk leading-[60px]">behind TagaTalk.</span>
                </div>
                <div className="w-[510px] left-[120px] top-[311px] absolute text-black text-base font-normal font-poppins">
                TagaTalk was established with a vision rooted in the belief that an enriched future for 
                Filipino language education is inherently more thrilling than a stagnant one. </div>
                <div className="w-[510px] left-[120px] top-[399px] absolute text-black text-base font-normal font-poppins">
                As students from Cebu Institute of Technology - University, our team, consisting of developers and content creators, 
                is passionately dedicated to empowering individuals in mastering Filipino language. With unique expertise, we craft 
                intuitive interfaces and immersive lessons, fostering connections and enriching lives through language empowerment. </div>

                <Image alt="arrow4"className="w-[159px] h-[42px] left-[218px] top-[626px] absolute" src='arrow4.svg' />
            
                <div className="w-[325px] h-[55px] z-10 p-2 left-[442px] top-[619px] absolute bg-black rounded-[50px] border border-black justify-center items-center gap-2 inline-flex">
                    <div className="text-white text-base font-normal font-space-grotesk">The amazing TagaTalk creators!</div>
                </div>

                <div className="absolute w-[639px] h-[671px] left-[693px] top-[91px] bg-zinc-300 bg-opacity-20 rounded-[19.41px] shadow backdrop-blur-[50px]" />
                
                <Image  alt ="rynze.svg" className="w-[207px] h-[155px] left-[808px] top-[156px] absolute" src='rynze.svg' />
                <Image  alt ="keath.svg"className="w-[205px] h-[233px] left-[1045px] top-[142px] absolute" src='keath.svg'/>
                <Image  alt ="shania.svg"className="w-[228px] h-[159px] left-[767px] top-[344px] absolute" src="shania.svg" />
                <Image  alt ="rj.svg"className="w-[206px] h-[146px] left-[807px] top-[534px] absolute" src="rj.svg" />
                <Image  alt ="pettes.svg"className="w-[210px] h-[238px] left-[1040px] top-[399px] absolute" src="pettes.svg" />

                <div className="w-32 h-10 left-[743px] top-[256px] absolute">
                    <div className="w-32 h-10 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-orange-400 shadow" />
                    <div className="left-[29px] top-[8px] absolute text-center text-white text-base font-medium font-space-grotesk">Rynze RJ</div>
                </div>

                <div className="w-32 h-10 left-[1170px] top-[304px] absolute">
                    <div className="w-32 h-10 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-orange-400 shadow" />
                    <div className="left-[28px] top-[8px] absolute text-center text-white text-base font-medium font-space-grotesk">Keath Ian</div>
                </div>

                <div className="w-32 h-10 left-[1160px] top-[567px] absolute">
                    <div className="w-32 h-10 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-orange-400 shadow" />
                    <div className="left-[15px] top-[9px] absolute text-center text-white text-base font-medium font-space-grotesk">Harvy Pettes</div>
                </div>

                <div className="w-[105px] h-10 left-[910px] top-[448px] absolute">
                    <div className="w-[105px] h-10 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-orange-400 shadow" />
                    <div className="left-[25px] top-[8px] absolute text-center text-white text-base font-medium font-space-grotesk">Shania</div>
                </div>

                <div className="w-[143px] h-10 left-[720px] top-[556px] absolute">
                    <div className="w-[143px] h-10 left-0 top-0 absolute bg-gradient-to-r from-amber-500 to-orange-400 shadow" />
                    <div className="left-[20px] top-[9px] absolute text-center text-white text-base font-medium font-space-grotesk">Rustico John</div>
                </div>

                <Image alt="bigstar" className="w-[45px] h-[45px] left-[1265px] top-[65px] absolute" src="bigstar1.svg" />
                <Image alt="smallstar"className="w-[22px] h-[19px] left-[1310px] top-[104px] absolute" src="smallstar1.svg" />

                <Image alt="bigstar2"className="w-[45px] h-[45px] left-[658px] top-[723px] absolute" src="bigstar2.svg" />
                <Image alt="smallstar2"className="w-[22px] h-[19px] left-[703px] top-[762px] absolute" src="smallstar2.svg" />
            </div>
        </div>
    );
}