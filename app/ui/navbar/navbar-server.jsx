import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Link from "next/link";


export default async function NavbarServer() {
    const session = await getServerSession(options);

    return (
        <>
            {session ?<li className="drop-shadow"> <Link href="/member">member</Link></li> : <li className="hidden"></li>}
            {session ?<li className="drop-shadow"> <Link href="/dashboard">dashboard</Link></li> : <li className="hidden"></li>}
            <li className="drop-shaddow">Hold</li>
            <li className="drop-shaddow"><Link href="./about">Hvem er vi?</Link></li>
            <li className="drop-shaddow"><Link href="../../#kontakt">Kontakt</Link></li>    
            {session ? <button className="bg-gray-800 rounded text-white px-3 py-1"><Link href="/api/auth/signout?callbackUrl=/">Log ud</Link></button> : <button className="bg-gray-800 rounded text-white px-3 py-1"><Link href="/api/auth/signin/">Log in</Link></button> }
        </>
    );
}