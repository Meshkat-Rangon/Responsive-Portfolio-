import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { cpscr, rzs, aiub } from '../public/asset'


const Education = () => {
  return (
    <section  id='experience'
     className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
        <SectionTitle title='Education'/>

        <div className=' flex flex-row space-x-4 '>

       <div className='w-1/3 h-80 bg-white rounded-md flex flex-col items-center hover:translate-x-2 transition-all duration-300'>

        <Image
        className=' mt-4 justify-center'
        src={aiub}
        alt='aiub'
        />
        <h3 className='text-black hover:translate-y-2 transition-all duration-300 '>B.Sc In Computer Engineering</h3>
        <p className='text-black hover:translate-y-2 transition-all duration-300'>Year of 2018</p>
        <p className='text-black hover:translate-y-2 transition-all duration-300'>3.02 out of 4</p>

       </div>
       <div className='w-1/3 h-80 bg-white rounded-md flex flex-col items-center hover:translate-x-2 transition-all duration-300'>

<Image
className=' mt-4 justify-center'
src={cpscr}
alt='cpscr'
/>
<h3 className='text-black hover:translate-y-2 transition-all duration-300 '>H.S.C From Science</h3>
<p className='text-black hover:translate-y-2 transition-all duration-300 '>Year Of 2012</p>
<p className='text-black hover:translate-y-2 transition-all duration-300 '>5.00 of 5.00</p>

</div>



<div className='w-1/3 h-80 bg-white rounded-md flex flex-col items-center hover:translate-x-2 transition-all duration-300'>

<Image
className=' mt-4 justify-center'
src={rzs}
alt='rzs'
/>
<h3 className='text-black hover:translate-y-2 transition-all duration-300'>S.S.C From Science</h3>
<p className='text-black hover:translate-y-2 transition-all duration-300 '>Year Of 2010</p>
<p className='text-black hover:translate-y-2 transition-all duration-300 '>5.00 out of 5.00</p>

</div>

</div>

     </section>
  )
}

export default Education