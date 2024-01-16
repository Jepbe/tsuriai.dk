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
    const tsuri_goshi = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/tsuri_goshi"
    // const Ogoshi = "http://localhost:3000/dashboard/techniquebank/o_goshi"
    // const tsuri_goshi = "http://localhost:3000/dashboard/techniquebank/tsuri_goshi"

    return (
        <div className="grid place-items-center h-screen">
            <div className="m-3">
                <h1 className="text-2xl">Børne Orange 2. mon</h1>
                <div className="mt-4">
                    <ul>
                        <li><i>Eleven skal have trænet tidligere bælte(r) til begge sider</i></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <ul>
                        <li>Fremvisning af kampstilling</li>
                        <li>Dojoformaliteter</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Faldteknikker (UKEMI WASA):</h3>
                    <ul>
                        <li>Lille faldkata</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Kast fra kumi kata:</h3>
                    <ul>
                        <li>Tsuri goshi</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Parader:</h3>
                    <ul>
                        <li>Parade mod uppercut</li>
                        <li>Nedadgående krydsblok</li>
                        <li>Opadgående krydsblok</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Slag:</h3>
                    <ul>
                        <li>Slag nedefra (uppercut)</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Spark:</h3>
                    <ul>
                        <li>Frontspark <Link className="text-blue-600 italic hover:underline" href={Ogoshi}>(MAE GERI)</Link></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Teknikker:</h3>
                    <ul>
                        <li>1. Frontspark, krydsblok, vending og træk</li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=BOA5b41mYDHYpN-a" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>2. Slag mod maven, lige armlås</li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=BOA5b41mYDHYpN-a&amp;start=13" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>3. Slag lige på, kast, armlås <Link className="text-blue-600 italic hover:underline" href={tsuri_goshi}>(TSURI GOSHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=BOA5b41mYDHYpN-a&amp;start=19" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>4. Slag lige på, kast, skulderlås  <Link className="text-blue-600 italic hover:underline" href={tsuri_goshi}>(TSURI GOSHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=BOA5b41mYDHYpN-a&amp;start=26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>5. Slag ovenfra, krydsblok, nedføring </li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=BOA5b41mYDHYpN-a&amp;start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>6. Dobbelt trøjegreb, kast <Link className="text-blue-600 italic hover:underline" href={tsuri_goshi}>(TSURI GOSHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=bDRKUG4ifWHZJOce&amp;start=50" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>7. Omklamring, bagfra, åben, fej <Link className="text-blue-600 italic hover:underline" href={tsuri_goshi}>(TSURI GOSHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/LjsXMvbsaFo?si=bDRKUG4ifWHZJOce&amp;start=65" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Fysisk udfordring:</h3>
                    <ul>
                        <li>Kast op tælling 15 stk. <Link className="text-blue-600 italic hover:underline" href={tsuri_goshi}>(TSURI GOSHI)</Link></li>
                        <li>5 min klapjagt</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}