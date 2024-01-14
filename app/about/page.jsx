import NavbarClient from "../ui/navbar/navbar-client";
import NavbarServer from "../ui/navbar/navbar-server";
import Image from "next/image";
import person1 from '../../public/instructors/DaniJohansson.jpg'
import person2 from '../../public/instructors/MichaelBogeskov.jpg'
import placeholder from '../../public/instructors/Placeholder.jpg'
import person4 from '../../public/instructors/JeppeBogeskov.jpg'
import PersonAge from "../ui/about/PersonAge";


export default function Page () {
    const personBirthdate1 = '1978-06-03';
    const personBirthdate2 = '2006-01-11';
    const personBirthdate3 = '2006-05-30';
    const personBirthdate4 = '1972-06-15';
    const personBirthdate5 = '1992-08-26';

    return (
    <>
        {/* Navbar */}
        <NavbarClient>
            <NavbarServer />
        </NavbarClient>

        <div>
            <div className="grid">
                <div className="h-[60vh] aboutImage flex justify-center items-end drop-shadow">
                    <div className="mb-16 text-center">
                        <h1 className="text-5xl font-semibold drop-shadow text-white"><span>Tsuriai Ryu</span> <span className="whitespace-pre">Ju Jitsu</span></h1>
                        <h1 className="text-xl drop-shadow-sm text-white text-center">釣流柔術スラゲルセ防衛</h1>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-20">
                    <div className="max-w-screen px-8 sm:px-0 sm:max-w-[600px] lg:max-w-[880px] mb-10">
                        <h1 className="text-xl font-medium">Instruktører</h1>
                        <p>Instruktørerne i klubben er frivillige og lægger meget tid i både deres egen, men også andres
                        træning. Sortbælte instruktører er sensei, mens bæltegraderne fra grøn og op kaldes sempai.</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-start gap-10 max-w-[1000px]">
                        <div className="bg-white rounded-lg shadow-md min-h-[300px] overflow-hidden">
                            <div><Image alt="billede af sensei" src={person1} height="150"/></div>
                            <ul className="p-4">
                                <li>Dani Johansson</li>
                                <li>Chefinstruktør og har trænet <br /> Ju Jitsu siden 1990</li>
                                <li><PersonAge birthdate={personBirthdate1} /></li>
                                <li>1. dan</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md min-h-[300px] overflow-hidden">
                            <div><Image alt="billede af instruktør" src={person2} height="150"/></div>
                            <ul className="p-4">
                                <li>Michael Bøgeskov</li>
                                <li>Trænet Ju Jitsu siden 2011</li>
                                <li><PersonAge birthdate={personBirthdate4} /></li>
                                <li>2. kyu med brun streg</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md min-h-[300px] overflow-hidden">
                            <div><Image alt="billede af instruktør" src={placeholder} height="150" width="full" /></div>
                            <ul className="p-4">
                                <li>Clara Thomsen</li>
                                <li>Trænet Ju Jitsu siden 2015</li>
                                <li><PersonAge birthdate={personBirthdate2} /></li>
                                <li>3. kyu</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md min-h-[300px] overflow-hidden">
                            <div><Image alt="billede af instruktør" src={person4} height="150" width="full" /></div>
                            <ul className="p-4">
                                <li>Jeppe Bøgeskov</li>
                                <li>Trænet Ju Jitsu siden 2021</li>
                                <li><PersonAge birthdate={personBirthdate3} /></li>
                                <li>4. kyu </li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-md min-h-[300px] overflow-hidden">
                            <div><Image alt="billede af instruktør" src={placeholder} height="150" width="full" /></div>
                            <ul className="p-4">
                                <li>Jesper Langfeldt</li>
                                <li>Trænet Ju Jitsu siden 2022</li>
                                <li><PersonAge birthdate={personBirthdate5} /></li>
                                <li>4. kyu</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}