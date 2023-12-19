//import { useRouter } from "next/navigation";
import Link from "next/link";

export default function navbar(navbar, link) {
//const router = useRouter();
    return(
        <nav className="w-screen h-16 shadow-md bg-white">
            <div className="w-screen flex justify-center items-center h-16">
                <ul className="flex flex-row gap-5">
                    <li><Link href="/">{navbar.text1}</Link></li>
                    <li><Link href="/about">{navbar.text2}</Link></li>
                    <li><Link href="/dashboard">{navbar.text3}</Link></li>
                    <li>{navbar.text4}</li>
                    <li>{navbar.text5}</li>
                </ul>
            </div>
        </nav>
    );
}