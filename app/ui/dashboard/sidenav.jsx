'use client'

import tsuriaiLogo from './tsuriaiLogo.png'
import Image from 'next/image';
import {HomeIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';
import { useState } from 'react';


export default function SideNav() {
  const [activeButton, setActiveButton] = useState('');
  const [navbar, setNavbar] = useState( false );

 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // onButtonClick(buttonName);
  }
  
  return(
    <>
            <button onClick={() => setNavbar(!navbar)} className="sm:hidden absolute right-4 top-4 z-10 items-center justify-center text-black rounded-lg">
                {navbar ?
                <span className='relative left-[2px] bottom-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </span> 
                :
                <span className='relative right-5'>
                  <svg className="w-8 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
                </span>
                }
            </button>

          <div className={`h-screen w-screen sm:w-[288px] bg-white sm:flex flex-col p-4 drop-shadow font-medium ${navbar ? 'flex' :'hidden'}`}>
            <div className='w-full mb-10 py-2'>
              <Image src={tsuriaiLogo} alt='Tsuriai Logo' width={75} height={75}></Image>
            </div>
                                                                {/* SKIFT FØR COMMIT  */}
            <Link onClick={ () => handleButtonClick('button3') } href="https://tsuriai-dk.vercel.app//dashboard">
              <div className={`${"px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1"} 
                ${activeButton === 'button3' ? 'bg-[#f3f3f3]' : ''}`}>

                <span className='flex flex-row gap-2 items-center'><i><HomeIcon className='h-5 w-5' /></i> Dashboard</span>
              </div>
            </Link>
                                                                {/* SKIFT FØR COMMIT  */}
            <Link onClick={ () => handleButtonClick('button1') } href="https://tsuriai-dk.vercel.app//dashboard/yellow ">
              <div className={`${'px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'} 
                ${activeButton === 'button1' ? 'bg-[#f3f3f3]' : ''}`}>
                
                <span className='flex flex-row gap-2 items-center'><i>🟨</i>Gult pensum</span>
              </div>
            </Link>
                                                                {/* SKIFT FØR COMMIT  */}
            <Link onClick={ () => handleButtonClick('button2') } href="https://tsuriai-dk.vercel.app//dashboard/orange">
              <div className={`${'px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'} 
                ${activeButton === 'button2' ? 'bg-[#f3f3f3]' : ''}`}>

                <span className='flex flex-row gap-2 items-center'><i>🟧</i>Orange Pensum</span>
              </div>
            </Link>
                                                                {/* SKIFT FØR COMMIT  */}
            <Link onClick={ () => handleButtonClick('button4')} href="https://tsuriai-dk.vercel.app//dashboard/green">
              <div className={`${'px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'} 
                ${activeButton === "button4" ? 'bg-[#f3f3f3]' : ''}`}>
                <span className='flex flex-row gap-2 items-center'><i>🟩</i>Grønt Pensum</span>
              </div>
            </Link>

          {/* Change before commit */}
          <Link href="https://tsuriai-dk.vercel.app/">
            <div className='px-2 py-[10px] w-[255px] hover:bg-[#282323] hover:cursor-pointer rounded fixed bottom-2 z-50'>
              <span className='flex flex-row gap-2 items-center'>
                <i>
                  <svg xmlns="http://.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                  </svg>
                </i>
                Tilbage
              </span>
            </div>
          </Link>
        </div>
    </>
    );
}