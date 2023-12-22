import Arrow from './ui/homePage/arrow'
import Cards from './ui/homePage/cards'


export default function Home() {
  return (<>

  <section className='bgImage text-white grid place-items-center'>
    <Arrow />

      <div className='text-center z-10 mb-28'>
        <h1 className='text-4xl font-semibold drop-shadow'>Tsuriai Ryu Ju Jitsu</h1>
        <h3 className='text-2xl font-semibold drop-shadow'>Slagelse Selvforsvarsklub</h3>
        {/* <span>釣流柔術</span><br />
        <span>スラゲルセ防衛</span> */}
      </div>      
  </section>


  <section className='grid place-items-center'>
      <Cards />
  </section>

  <section className='bgImage2'>
        <div>
          <h1>Kontakt</h1>
        </div>
  </section>

</>)
}
