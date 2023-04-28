import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { propic } from '../public/asset'

import { FaStrava } from "react-icons/fa";

const About = () => {
  return (
    <section

    id='about'
    className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >

<SectionTitle title='About Me'/>

<div className='flex flex-col lg:flex-row gap-16'>
<div className=' w-full lg:w-2/3 text-justify text-sm text-slate-400'>

    <p className=' hover:text-teal-50 hover:translate-x-2 transition-all duration-300'>
As a professional IT personnel, I would
work for the organization with modern
 technical idea’s. My privious work 
experiences and professional skills as an
IT personnel will be dedicatedto the
organization and drive IT team as a 
leading Department in any situation.

My concern is to get the higher degree with subjects like Business analysis/Data Science 
and help the country/organization with the decision trees for any future scopes/disasters.
Starting with the statement about why I’m interested in Data Science/Business analysis is 
a story of a person who wants to endorse his engineering skills to the benefit of an 
organization's business. In recent days, whenever I found the “Business” part of the 
morning newspaper with a lemon tea I found out my country is holding a huge amount of 
data in all the business sectors
    </p>

    <h2 className=' mt-2 mb-2 text-3xl hover:text-teal-50 hover:translate-x-2 transition-all duration-300'>Technologies I'm Confident enough</h2>


    <ul className='text-2xl max-w-[450px] grid grid-cols-2'>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> JavaScript</li>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> HTML</li>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> CSS</li>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> TailWind</li>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> Selenium</li>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> Next.JS</li>
   <li className='flex items-center gap-2  hover:text-teal-50 '><span><FaStrava/></span> Windows Server</li>

    </ul>

</div>
<div className=' w-full lg:w-1/3 h-80 relative group'>
    
            <Image
            className=' rounded-lg h-full object-cover hover:translate-x-2 transition-all duration-300'
            src={propic}
            alt='propic'
            />
</div>

</div>


    </section>
  )
}

export default About