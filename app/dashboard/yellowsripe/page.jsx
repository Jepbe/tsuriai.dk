import { redirect } from "next/navigation";
import { getServerSession } from 'next-auth';
import { options } from "../../api/auth/[...nextauth]/options";
import Link from "next/link";


export default async function Page() {
    const session = await getServerSession(options);
    if(!session) {
        redirect('/api/auth/signin?callbackUrl=/dashboard')
    }
    // CHANGE BEFORE PRODUCTION
    const Ogoshi = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/o_goshi"
    // const Ogoshi = "http://localhost:3000/dashboard/techniquebank/o_goshi"

    return (
        <div className="grid place-items-center h-screen">
            <div className="m-3">
                <h1 className="text-2xl">Børne Gul 3. mon</h1>
                <div className="mt-4">
                    <h3 className="underline">Faldteknikker (UKEMI WASA):</h3>
                    <ul>
                        <li>Rullefald</li>
                        <li>Sidefald</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Kast fra kumi kata:</h3>
                    <ul>
                        <li>O goshi</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Parader:</h3>
                    <ul>
                        <li>3 basis parader, begge sider</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Slag:</h3>
                    <ul>
                        <li>Slag lige på</li>
                        <li>Slag oppefra</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Spark:</h3>
                    <ul>
                        <li>Skridtspark <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(KIN GERI)</Link></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Teknikker:</h3>
                    <ul>
                        <li>1. Skridtspark, dobbeltslag, kast <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(O GOSHI)</Link></li>
                        <li><iframe width="100%" height="210"  src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></li>
                        <br />
                        <li>2. Slag lige på, lige armlås</li>
                        <iframe width="100%" height="210" src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2&amp;start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                        <li>3. Slag lige på, kast, håndledslås <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(O GOSHI)</Link></li>
                        <iframe width="100%" height="210" src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2&amp;start=15" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                        <li>4. Slag lige på, kast, siddende lige armlås <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(O GOSHI)</Link></li>
                        <br />
                        <li>5. Slag lige på, træd i hase</li>
                        <iframe width="100%" height="210" src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2&amp;start=28" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                        <li>6. Slag ovenfra, kast <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(O GOSHI)</Link></li>
                        <iframe width="100%" height="210" src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2&amp;start=41" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                        <li>7. Forsvar mod enkelt trøjegreb, kast <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(O GOSHI)</Link></li>
                        <iframe width="100%" height="210" src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2&amp;start=45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <br />
                        <li>8. Forsvar mod omklamring, forfra, åben, nedføring </li>
                        <iframe width="100%" height="210" src="https://www.youtube.com/embed/HgLWz94CKBk?si=HhDH50-E0vzWTWc2&amp;start=56" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Fysisk udfordring:</h3>
                    <ul>
                        <li>Kast op tælling 10 stk. <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(O GOSHI)</Link></li>
                        <li>5 min klapjagt i ring</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}