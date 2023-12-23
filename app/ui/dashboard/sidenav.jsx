import tsuriaiLogo from './tsuriaiLogo.png'
import Image from 'next/image';

import {HomeIcon} from '@heroicons/react/24/outline'

export default function SideNav() {
    return(      
          <div className='h-screen w-[288px] bg-white flex flex-col p-4 drop-shadow'>
            <div className='w-full mb-10 py-2'>
              <Image src={tsuriaiLogo} alt='Tsuriai Logo' width={75} height={75}></Image>
            </div>
            <div className='px-2 py-[10px] bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'>
              <span className='inline-block'><i><HomeIcon className='h-5 w-5' /></i> Dashboard</span>
            </div>
            <div className='px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'>
              <span>Gult Pensum</span>
            </div>
            <div className='px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'>
              <span>Grønt Pensum</span>
            </div>
            <div className='px-2 py-[10px] hover:bg-[#f3f3f3] hover:cursor-pointer rounded mt-1'>
              <span>Orange Pensum</span>
            </div>
          </div>
    );
}