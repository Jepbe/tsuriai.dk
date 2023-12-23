import Arrow from './ui/homePage/arrow'
import Cards from './ui/homePage/cards'
import Navbar from './ui/navbar/navbar'

export default function Home() {
  return (<>
<Navbar />
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

  <section className='bgImage2 grid place-items-center grid-cols-2'>
        <div>
          <h1>Kontakt</h1>
        </div>
        <div className='bg-white h-[60vh] px-40'>
          <h1>Kontakt</h1>
        </div>
  </section>

</>)
}
