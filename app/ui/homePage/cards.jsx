import Image from 'next/image';
import samurai from './samurai.jpg'
import tsuriaiLogo from './tsuriaiLogo.jpg'

export default function Cards() {
    return (
        <div className="
            flex
            justify-center
            gap-8
            mdL:flex-row
            flex-col
            mt-10
        ">
            <div className="bg-white w-[330px] sm:w-[380px] rounded-lg h-[60vh] sm:h-[74vh] drop-shadow-sm">
                <Image src={samurai} className='w-full rounded-lg'/>
                <div className='grid place-items-center relative bottom-24 sm:bottom-10'>
                    <h1 className='font-semibold text-xl'>Hvad er Ju Jitsu?</h1>
                    <p className='text-center text-[14px]'>Ju Jitsu er de gamle japanske samuraiers kampkunst. Samuraiernes kampkunst blev udviklet for at kunne nedkæmpe en fjende iført rustning </p> <br />
                    <button className='border-gray-400 border-[1px] rounded-md px-2 py-1 hover:bg-gray-400/[.2]'>Læs mere</button>
                </div>
            </div>

            <div className="bg-white w-[330px] sm:w-[380px] rounded-lg h-[60vh] sm:h-[74vh] drop-shadow-sm grid place-items-center">
                <Image src={tsuriaiLogo} className='rounded-lg'/>
                <div className='grid place-items-center sm:bottom-10'>
                    <h1 className='font-semibold text-xl'>Hvad er Ju Jitsu?</h1>
                    <p className='text-center text-[14px]'>Ju Jitsu er de gamle japanske samuraiers kampkunst. Samuraiernes kampkunst blev udviklet for at kunne nedkæmpe en fjende iført rustning </p> <br />
                    <button className='border-gray-400 border-[1px] rounded-md px-2 py-1 hover:bg-gray-400/[.2]'>Læs mere</button>
                </div>
            </div>
            
        </div>
    );
}