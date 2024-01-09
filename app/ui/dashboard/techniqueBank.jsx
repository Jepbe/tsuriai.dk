import Link from "next/link";


export default function TechniqueBank() {
    return (
        <div>
            <h1 className="ml-5 mt-5">Hofte Kast</h1>
            <ul className="m-5">
                {/* Change links before commit */}
                <Link href="http://localhost:3000/dashboard/techniqueBank/o_goshi"><li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">O GOSHI</li></Link>
                <Link href="http://localhost:3000/dashboard/techniqueBank/tsuri_goshi"><li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">TSURI GOSHI</li></Link>
                <Link href="http://localhost:3000/dashboard/techniqueBank/uki_goshi"><li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">UKI GOSHI</li></Link>
                <Link href="http://localhost:3000/dashboard/techniqueBank/hari_goshi"><li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">HARI GOSHI</li></Link>
                <Link href="http://localhost:3000/dashboard/techniqueBank/kubi_nage"><li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">KUBI NAGE</li></Link>
                <Link href="http://localhost:3000/dashboard/techniqueBank/hane_goshi"><li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">HANE GOSHI</li></Link>
            </ul>
            <h1 className="ml-5 mt-5">Skulder Kast</h1>
            <ul className="m-5">
                <li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">IPPON SAIO NAGE</li>
                <li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">MOROTE SAIO NAGE</li>
                <li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">ERI SAIO NAGE</li>
            </ul>
            <h1 className="ml-5 mt-5">Ben Kast</h1>
            <ul className="m-5">
                <li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">O SOTO GARI</li>
                <li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">O UCHI GARI</li>
            </ul>
            <h1 className="ml-5 mt-5">Krops Kast</h1>
            <ul className="m-5">
                <li className="bg-white rounded p-4 drop-shadow my-2 cursor-pointer">TAI OTOSHI</li>
            </ul>
        </div>
    );
}