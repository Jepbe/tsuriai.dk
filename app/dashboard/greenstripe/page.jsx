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
    const uki_goshi = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/uki_goshi"
    const yoko_wakare = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/yoko_wakare"
    const o_soto_gari = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/o_soto_gari"
    const taware_gaeshi = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/taware_gaeshi"
    const indv_gaeshi = "https://tsuriai-dk.vercel.app/dashboard/techniquebank/indv_gaeshi"
    // const uki_goshi = "http://localhost:3000/dashboard/techniquebank/uki_goshi"
    // const yoko_wakare = "http://localhost:3000/dashboard/techniquebank/yoko_wakare"
    // const o_soto_gari = "http://localhost:3000/dashboard/techniquebank/o_soto_gari"
    // const taware_gaeshi = "http://localhost:3000/dashboard/techniquebank/taware_gaeshi"
    // const indv_gaeshi = "http://localhost:3000/dashboard/techniquebank/indv_gaeshi"

    return (
        <div className="grid place-items-center h-screen">
            <div className="m-3">
                <h1 className="text-2xl">Børne Grøn 1. mon</h1>
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
                        <li>Uki goshi</li>
                        <li>O soto gari</li>
                        <li>Yoko wakare</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Parader:</h3>
                    <ul>
                        <li>Krogparade</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Slag:</h3>
                    <ul>
                        <li>Short punch</li>
                        <li>Svingslag</li>
                        <li>2 slagserier</li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Spark:</h3>
                    <ul>
                        <li>Knæspark <Link className="text-blue-600 italic hover:underline" href={uki_goshi}>(HIZA GERI)</Link></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Teknikker:</h3>
                    <ul>
                        <li>1. Slag nedefra, håndledslås</li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>2. Slag lige på, kast, liggende krydsarmlås <Link className="text-blue-600 italic hover:underline" href={uki_goshi}>(UKI GOSHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>3. Svingslag, kast <Link className="text-blue-600 italic hover:underline" href={o_soto_gari}>(O SOTO GARI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>4. Shortpunch, kast <Link className="text-blue-600 italic hover:underline" href={uki_goshi}>(UKI GOSHI)</Link></li>
                        <br />
                        <li>5. Dobbeltslag, kast <Link className="text-blue-600 italic hover:underline" href={taware_gaeshi}>(TAWARE GAESHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=34" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>6. Uppercut, nedføring</li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>7. Enkelt trøjegreb, kast <Link className="text-blue-600 italic hover:underline" href={indv_gaeshi}>(INDV. GAESHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>8. Dobbelt trøjegreb, kast <Link className="text-blue-600 italic hover:underline" href={yoko_wakare}>(YOKO WAKARE)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=62" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>9. Hårgreb, armfejning</li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>10. Sidehalsgreb, frigørelse</li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=77" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                        <br />
                        <li>11. Omklamring, forfra, lukket, kast <Link className="text-blue-600 italic hover:underline" href={uki_goshi}>(UKI GOSHI)</Link></li>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ld7YO1hT3nQ?si=NLziENk51AXIr1j8&amp;start=89" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen></iframe>
                    </ul>
                </div>
                <div className="mt-4">
                    <h3 className="underline">Fysisk udfordring:</h3>
                    <ul>
                        <li>Kast op tælling 10 stk. <Link className="text-blue-600 italic hover:underline" href={uki_goshi}>(UKI GOSHI)</Link></li>
                        <li>Kast op tælling 10 stk. <Link className="text-blue-600 italic hover:underline" href={o_soto_gari}>(O SOTO GARI)</Link></li>
                        <li>Randori</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}