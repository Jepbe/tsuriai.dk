'use client'

import Link from "next/link";
import { useState } from "react";


export default function NavbarClient({ children }) {
    const [isClick, setisClick] = useState(false);
    
    const toggleNavbar = () => {
        setisClick(!isClick);
    }

    return (
    <> 
        <button onClick={toggleNavbar} className="z-50 cursor-pointer md:hidden fixed right-7 top-6 text-white ">
            <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>

        <header className="fixed top-0 left-0 w-full z-20 drop-shadow-lg">
        <nav className="text-white flex justify-between m-4">
        <Link href="/"><span className="text-2xl font-medium drop-shadow underline">Tsuriai Ryu</span></Link>  
                {open && ( children ) }     
            </nav>
        </header>
    </>
    );
}