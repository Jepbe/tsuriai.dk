import Arrow from './ui/homePage/arrow';
import Cards from './ui/homePage/cards';
import NavbarClient from './ui/navbar/navbar-client';
import NavbarServer from './ui/navbar/navbar-server';
import Link from 'next/link';


export default function Home() {
  return (<>

  {/* Navbar */}
  <NavbarClient>
    <NavbarServer />
  </NavbarClient>


  <section className='bgImage text-white grid place-items-center'>
    <Arrow />

      <div className='text-center z-10 mb-28'>
        <h1 className='text-4xl font-semibold drop-shadow'>Tsuriai Ryu Ju Jitsu</h1>
        <h3 className='text-2xl font-semibold drop-shadow'>Slagelse Selvforsvarsklub</h3>
        {/* <span>釣流柔術</span><br />
        <span>スラゲルセ防衛</span> */}
      </div>      
  </section>


  <section className='grid place-items-center' name='section2' id='section2'>
      <Cards />
  </section>

  <section className='bgImage2 overflow-hidden mt-10 md:mt-0'>
        <div className='grid place-items-center h-screen grid-cols-1 md:grid-cols-2'>
          <div className='py-7 px-4 bg-[#DFDFDF] rounded-lg opacity-90 min-h-[300px]' id='kontakt'>
            <div className='flex justify-center flex-col'>
              <h1 className='text-xl font-bold text-center'>Kontakt</h1> <br/>
              <p>Du kan altid skrive til os på vores  
                mail <br/> <Link href="mailto:klubben@tsuriai.dk" className='underline'>klubben@tsuriai.dk</Link> <br/><br/>
                Ringe eller skrive til: <br/>
                Dani Johansson <br/>
                28 26 61 37 <br/><br/>
                Skrive til os og like os på <Link href="https://www.facebook.com/TsuriaiRyu/" className='underline'>Facebook</Link>
              </p>
            </div>
          </div>
          <div className='py-4 px-4 bg-[#DFDFDF] rounded-lg opacity-90 min-h-[300px]'>
            <div className='flex justify-center flex-col'>
              <h1 className='text-xl font-bold text-center'>Hvor er vi?</h1> <br/>
              <p>Vores dojo ligger i en tilbygning   
                <br/>
                til Søndermarkshallen ved <br/>
                Søndermarksskolen i Slagelse.<br/>
                Adressen er Byskov Allé 41,<br/>
                4200 Slagelse <br/> <br />
                Har du brug for hjælp til at finde vej? 
              </p>
              <button className='border-gray-400 border-[1px] rounded-md px-2 py-1 hover:bg-gray-400/[.2]'>Find vej</button>
            </div>
          </div>
         
        </div>
  </section>
</>)
}
