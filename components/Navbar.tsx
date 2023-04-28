'use client'
import React from 'react'
import Image from 'next/image';
import  logo  from '../public/asset/Logo.png';
import Link from 'next/link';
import { motion } from "framer-motion"


function Navbar() {
  return (
    <div className="sticky top-0 z-10 shadow-lg h-20 bg-gradient-to-b from-teal-800 to-teal-100 backdrop-blur-md overflow-x-hidden ">
      <div className=' max-w-container h-full mx-auto py-1 flex justify-between items-center p-5 '>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}      
        >
          <a href=" /asset/Resume-Md. Meshkat Azad Rangon.pdf">

          <Image className=' w-14 hover:translate-y-2 transition-all duration-300' src={logo} alt={''} />
          </a>
          

          </motion.div>

        <div className=' text-white text-sm font-bold uppercase flex '>
          <ul className=' flex gap-4'>
           <Link href='/' className=' flex items-center gap-1 hover:text-teal-900 cursor-pointer hover:translate-y-2 transition-all duration-300 nav-link'>
              <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.1}}  
              >Home</motion.li>    
           </Link>
           <Link href='../../components/About' className=' flex items-center gap-1 hover:text-teal-900 cursor-pointer hover:translate-y-2 transition-all duration-300 nav-link'>
              <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.1}}  
              >About</motion.li>
           </Link>
           <Link href='../../components/Experience' className=' flex items-center gap-1 hover:text-teal-900 cursor-pointer hover:translate-y-2 transition-all duration-300 nav-link'>
              <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.1}}  
              >Experience</motion.li>
           </Link>
           <Link href='../../components/Projects' className=' flex items-center gap-1 hover:text-teal-900 cursor-pointer hover:translate-y-2 transition-all duration-300 nav-link'>
              <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.1}}  
              >Project</motion.li>
           </Link>
           <Link href='../../components/Education' className=' flex items-center gap-1 hover:text-teal-900 cursor-pointer hover:translate-y-2 transition-all duration-300 nav-link'>
              <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.1}}  
              >Education</motion.li>
           </Link>

           <Link href='../../components/Rightside' className=' flex items-center gap-1 hover:text-teal-900 cursor-pointer hover:translate-y-2 transition-all duration-300 nav-link'>
              <motion.li
              initial={{y:-10, opacity:0}}
              animate={{y:0, opacity:1}}
              transition={{duration:0.1}}  
              >Contact Me</motion.li>
           </Link>
          </ul>
        </div>

        <div className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
          <span className=' w-full h-2[px] bg-textwhite inline-flex transform group-hover:translate-x-2 transition-all ease-in-out hover:translate-y-2 duration-300'></span>
          <span className=' w-full h-2[px] bg-textwhite inline-flex transform group-hover:translate-x-3 transition-all ease-in-out hover:translate-y-2 duration-300'></span>
          <span className=' w-full h-2[px] bg-textwhite inline-flex transform group-hover:translate-x-1 transition-all ease-in-out hover:translate-y-2 duration-300'></span>

        </div>





      </div>
    </div>
  );
}

export default Navbar