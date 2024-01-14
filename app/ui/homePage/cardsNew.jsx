import Image from 'next/image';
import Link from 'next/link';
import samurai from './samurai.jpg'
import tsuriaiLogo from './tsuriaiLogo2.jpg'

export default function CardsNew() {
    return (
        <div className="flex md:flex-row flex-col">
            <div className="max-w-[20rem] mx-5 mt-10 md:mt-0 max-h-[35rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image src={samurai} className='rounded-t-lg w-full' alt='Billede af Samurai'/>
                <div className='px-5 mt-[-4rem]'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Hvad er Ju Jitsu?</h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Ju Jitsu er de gamle japanske samuraiers kampkunst. Samuraiernes kampkunst blev udviklet for at kunne nedkæmpe en fjende iført rustning </p>
                    <br />
                    <Link href="./" className='mb-4  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Læs mere
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
            
            <div className="max-w-[20rem] mt-10 mx-5 md:mt-0 max-h-[35rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Image src={tsuriaiLogo} className='rounded-t-lg w-full' alt='Billede af Samurai'/>
                <div className='px-5 mt-[-4rem]'>
                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>Tsuriai Ryu Ju Jitsu?</h5>
                    <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>Måske befinder du dig ofte i situationer eller områder der føles utrygge eller også har du oplevet situationer, der gør at du finder det nødvendigt at kunne forsvare dig selv</p>
                    <Link href="./" className='mb-4  inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                        Læs mere
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}