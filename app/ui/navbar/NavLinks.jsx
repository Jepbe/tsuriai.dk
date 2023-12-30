import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options";
import Link from 'next/link'

export default async function NavLinks() {
    const session = await getServerSession(options);

    return ( <>
        {session ?<li className="drop-shadow"> <Link href="/member">member</Link></li> : <li className="hidden"></li>}
        {session ?<li className="drop-shadow"> <Link href="/dashboard">dashboard</Link></li> : <li className="hidden"></li>}
        <li className="drop-shaddow">Hold</li>
        <li className="drop-shaddow"><Link href="./hvemervi">Hvem er vi?</Link></li>
        <li className="drop-shaddow">Kontakt</li>
        <li>
            {session ? <button className="bg-blue-500 rounded text-white px-3 py-1"><Link href="/api/auth/signout?callbackUrl=/">Log ud</Link></button> : <button className="bg-blue-500 rounded text-white px-3 py-1"><Link href="/api/auth/signin/github">log in</Link></button> }
        </li>            
    </>
    );
    
}