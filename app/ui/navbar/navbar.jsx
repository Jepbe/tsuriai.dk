import Link from "next/link";
// import { getServerSession } from 'next-auth';
// import { options } from "../../api/auth/[...nextauth]/options";

// export default async function Navbar() {
export default function Navbar() {
    // const session = await getServerSession(options);
    
    return(
        <header className="fixed top-0 left-0 w-full z-20 drop-shadow-lg">
            <nav className="text-white flex justify-between m-4">
                <Link href="/"><span className="text-2xl font-medium drop-shadow underline">Tsuriai Ryu</span></Link>  

                <ul className="md:flex flex-col text-[16px] md:flex-row gap-9  items-center">
                    {/* {session ?<li className="drop-shadow"> <Link href="/member">member</Link></li> : <li className="hidden"></li>} */}
                    {/* {session ?<li className="drop-shadow"> <Link href="/dashboard">dashboard</Link></li> : <li className="hidden"></li>} */}
                    <li className="drop-shaddow">Hold</li>
                    <li className="drop-shaddow"><Link href="./hvemervi">Hvem er vi?</Link></li>
                    <li className="drop-shaddow"><Link href="../../#kontakt">Kontakt</Link></li>    
                    <li>
                        {/* {session ? <button className="bg-blue-500 rounded text-white px-3 py-1"><Link href="/api/auth/signout?callbackUrl=/">Log ud</Link></button> : <button className="bg-blue-500 rounded text-white px-3 py-1"><Link href="/api/auth/signin/github">log in</Link></button> } */}
                    </li>  
                </ul>
            </nav>
        </header>        
    );
}