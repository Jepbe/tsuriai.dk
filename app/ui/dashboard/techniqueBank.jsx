import Link from "next/link";
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })

export default function TechniqueBank() {
    // Change before production
    const baseLink = "https://tsuriai-dk.vercel.app/";
    // const baseLink = "http://localhost:3000";

    return (
        <div>
            <div className={`ml-5 mt-20 md:mt-5 md:inline-block flex flex-col items-center ${roboto.className}`}>   
                <div>
                    <h1 className="text-2xl font-bold">Kasteteknikker</h1>
                    <h2 className="text-xl mt-[-5px]">NAGE WASA</h2>
                    <h2 className="text-xl mt-[-5px]">投げ技</h2>
                </div>
            </div>
            <h1 className="ml-5 mt-5 font-bold text-center md:text-left">Hofte Kast</h1>
            <ul className="m-5">
                <Link href={`${baseLink}/dashboard/techniquebank/o_goshi`}><li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">O GOSHI</li></Link>
                <Link href={`${baseLink}/dashboard/techniquebank/tsuri_goshi`}><li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">TSURI GOSHI</li></Link>
                <Link href={`${baseLink}/dashboard/techniquebank/uki_goshi`}><li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">UKI GOSHI</li></Link>
                <Link href={`${baseLink}/dashboard/techniquebank/hari_goshi`}><li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">HARI GOSHI</li></Link>
                <Link href={`${baseLink}/dashboard/techniquebank/kubi_nage`}><li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">KUBI NAGE</li></Link>
                <Link href={`${baseLink}/dashboard/techniquebank/hane_goshi`}><li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">HANE GOSHI</li></Link>
            </ul>
            <h1 className="ml-5 mt-8 font-bold text-center md:text-left">Skulder Kast</h1>
            <ul className="m-5">
                <li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">IPPON SAIO NAGE</li>
                <li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">MOROTE SAIO NAGE</li>
                <li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">ERI SAIO NAGE</li>
            </ul>
            <h1 className="ml-5 mt-5 font-bold text-center md:text-left">Ben Kast</h1>
            <ul className="m-5">
                <li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">O SOTO GARI</li>
                <li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">O UCHI GARI</li>
            </ul>
            <h1 className="ml-5 mt-5 font-bold text-center md:text-left">Krops Kast</h1>
            <ul className="m-5">
                <li className="bg-white rounded p-4 drop-shadow my-3 cursor-pointer text-center md:text-left font-bold md:font-normal">TAI OTOSHI</li>
            </ul>
        </div>
    );
}