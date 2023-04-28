

import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../../components/Navbar'
import Leftside from '../../components/Leftside'
import Rightside from '../../components/Rightside'
import Banner from '../../components/Banner'
import About from '../../components/About'
import Experience from '../../components/Experience'
import Education from '../../components/Education'
import Projects from '../../components/Projects'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=" w-full h-full bg-teal-800 text-white">
      <Navbar/>
      <div className='w-full h-full xl:flex items-center gap-20 justify-between'>

        <div className=' hidden xl:inline-flex w-20 h-full fixed left-0 bottom-10'>
          
          <Leftside/>

        </div >
       
        <div className=' hidden xl:inline-flex w-20 h-full fixed right-0 bottom-10'>
        
        <Rightside/>
        </div>
       <div className='h-full mx-auto p-4 mt-40 bg-teal-800'>
          <Banner/>
          <About />
          <Experience/>
          <Education/>
          <Projects/>
          {/*Contact Me*/}
       </div>
      </div>
      
    </main>
  )
}
