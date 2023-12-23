import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options";
import Link from 'next/link'

export default async function Nav() {
    const session = await getServerSession(options);

    return (    
        <nav className="text-white flex justify-between m-4">
        <Link href="/"><span className="text-2xl font-medium drop-shadow underline">Tsuriai Ryu</span></Link>
            <button className="md:hidden inline-flex items-center justify-center w-10 h-10 text-sm text-white rounded-lg hover:bg-gray-300/[.2] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <ul className="md:flex flex-col text-[16px] md:flex-row gap-9 items-center hidden">
                {session ?<li className="drop-shadow"> <Link href="/member">member</Link></li> : <li className="hidden"></li>}
                {session ?<li className="drop-shadow"> <Link href="/dashboard">dashboard</Link></li> : <li className="hidden"></li>}
                <li className="drop-shaddow">Hold</li>
                <li className="drop-shaddow"><Link href="./hvemervi">Hvem er vi?</Link></li>
                <li className="drop-shaddow">Kontakt</li>
                <li>
                    {session ? <button className="bg-blue-500 rounded text-white px-3 py-1"><Link href="/api/auth/signout?callbackUrl=/">Log ud</Link></button> : <button className="bg-blue-500 rounded text-white px-3 py-1"><Link href="/api/auth/signin/github">log in</Link></button> }
                </li>                    
            </ul>
    </nav>
    );
    
}