'use client'

import Link from "next/link";
import { useState } from "react";


export default function NavbarClient({ children }) {
    const [navbar, setNavbar] = useState( false );
    

    return (
    <> 
        <button onClick={() => setNavbar(!navbar)} className="z-50 cursor-pointer md:hidden fixed right-7 top-6 text-white ">
            {navbar ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            :
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            }
        </button>

        <header className="fixed top-0 left-0 w-full z-20 drop-shadow-lg">
            <nav className={`text-white flex justify-between m-4 ${navbar ? 'flex-col' :'flex-row'}`}>
            <Link href="/"><span className="text-2xl font-medium drop-shadow underline">Tsuriai Ryu</span></Link>   
                <ul className={`md:hidden ml-[-1rem] mt-6 flex flex-col w-screen justify-center h-[90vh] bg-[hsla(0,0%,100%,.95)] text-gray-500 font-medium text-[26px] md:flex-row gap-9 items-center ${navbar ? 'flex' : 'hidden'}`}>
                    { children }
                </ul>

                <ul className={`hidden md:flex flex-col text-[16px] md:flex-row gap-9 items-center`}>
                    { children }
                </ul>
           </nav>
        </header>
    </>
    );
}