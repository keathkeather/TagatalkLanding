import React from "react";

export default function NavBar() {
    return (
        <header className="pt-[38px] pb-[20px] flex justify-center bg-slate-50">
            <div className="w-[1230px] bg-[#F4F4F4] bg-opacity-50 rounded-[50px] shadow-lg p-[15px]">
                <div className="px-[40px] sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="/NavBar Logo.svg" className="h-[52px] w-[179px]" alt="Flowbite Logo" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-[14px] font-medium text-black sm:mb-0">
                        <li>
                            <a href="#features" className="hover:text-orange-400  me-4 md:me-6 mb">Features</a>
                        </li>
                        <li>
                            <a href="#how" className="hover:text-orange-400 me-4 md:me-6">How it Works</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-orange-400 me-4 md:me-6">About Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
