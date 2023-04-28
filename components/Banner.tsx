"use client"
import { motion } from "framer-motion"
import React from 'react'

const Banner = () => {
  return (
    <section id='home' className=' max-w-contentContainer mx-auto py10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px10 xl-px-4 '>

    <motion.h3
       initial={{y:10, opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{duration:0.1, delay:0.4}}  className=' font-bold text-gray-50 hover:text-slate-950 hover:translate-y-2 transition-all duration-300 '>Assalamualaikum !!!</motion.h3>
    <motion.h1 
       initial={{y:10, opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{duration:0.1,delay:0.5}} 
    
    
    className=' text-6xl font-bold text-slate-400 hover:text-slate-950 uppercase hover:translate-y-2 transition-all duration-300'>Md. Meshkat Alam Azad</motion.h1>
    <motion.h1 
       initial={{y:10, opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{duration:0.1,delay:0.6}} 
    
    className=' text-3xl font-bold text-white hover:text-slate-950 hover:translate-y-2 transition-all duration-300'>I make things beautiful</motion.h1>
    <motion.h3 
      initial={{y:10, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.1,delay:0.7}} 
    
    
    
    className=' font-bold text-sky-300 text-4xl hover:text-slate-950 uppercase hover:translate-y-2 transition-all duration-300'>In the world of web, Whatever you can imagine, I can create.....</motion.h3>
    
   
    <motion.p 
    
    initial={{y:10, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.3,delay:0.8}} 
    
    
    
    className=' text-justify hover:translate-y-2 transition-all duration-300 md:max-w-[650px]'>I'm an IT professional with 4+ years experienced in IT infrustrucre.
        Recently I've started modern trade IT career with Front End development
        and technologies like NEXT.JS, Tailwind, and JS. I'm also interested in 
        Data Science and visualization. I believe I'm little chosy about the things.
        And I don't stop untill I didn't find the best outlook, that makes me confident
        to start over Front end development. 
        <a href=" ./Education" className="inline-block text-yellow-600 hover:text-gray-900 hover:translate-y-2 transition-all duration-300">
         Get More
</a>
    </motion.p>

    <button className=" w-52 h-14 text-sm font-titleFont border border-white rounded-md text-textWhite tracking-wide hover:translate-y-2 transition-all duration-300 hover:text-black">My Skills</button>
    





    </section>
  )
} 

export default Banner