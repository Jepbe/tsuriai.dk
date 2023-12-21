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
                <Image src={samurai} className='w-full rounded-lg' alt='Samurai'/>
                <div className='grid place-items-center relative bottom-24 sm:bottom-10'>
                    <h1 className='font-semibold text-xl'>Hvad er Ju Jitsu?</h1>
                    <p className='text-center text-[14px]'>Ju Jitsu er de gamle japanske samuraiers kampkunst. Samuraiernes kampkunst blev udviklet for at kunne nedkæmpe en fjende iført rustning </p> <br />
                    <button className='border-gray-400 border-[1px] rounded-md px-2 py-1 hover:bg-gray-400/[.2]'>Læs mere</button>
                </div>
            </div>

            <div className="bg-white w-[330px] sm:w-[380px] rounded-lg h-[60vh] sm:h-[74vh] drop-shadow-sm grid place-items-center">
                <Image src={tsuriaiLogo} className='rounded-lg' alt='Tsuriai logo'/>
                <div className='grid place-items-center sm:bottom-10'>
                    <h1 className='font-semibold text-xl'>Tsuriai Ryu Ju Jitsu?</h1>
                    <p className='text-center text-[14px] mx-2'>Måske befinder du dig ofte i situationer eller områder der føles utrygge eller også har du oplevet situationer, der gør at du finder det nødvendigt at kunne forsvare dig selv</p> <br />
                    <button className='border-gray-400 border-[1px] rounded-md px-2 py-1 hover:bg-gray-400/[.2]'>Læs mere</button>
                </div>
            </div>
            
        </div>
    );
}