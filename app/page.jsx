import Image from 'next/image'
import Navbar from './ui/navbar'

export default function Home() {
  return ( 
<>
    {/* <Navbar 
      text1="navbar1"
      text2="navbar2"
      text3="navbar3"  
      text4="navbar4"  
      text5="navbar5"  
    /> */}

    <main className='w-screen h-screen grid place-items-center'>
      <div>
        <h1>Tsuriai Ryu Ju Jitsu</h1>
        <h3>Slagelse Selvforsvarsklub</h3>
      </div>

    </main>
</>
  )
}
