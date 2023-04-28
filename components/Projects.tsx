"use client"
import React, { useState } from 'react'
import SectionTitle from './SectionTitle'
import Cards from './Cards'
import { motion } from 'framer-motion'

const Projects = () => {
  const [showMore,setShowMore]=useState(false);
  return (
    <section id='projects' className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'>
    <SectionTitle title='My Projects'/>

    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lg:px-10'>
      <Cards link={'https://github.com/Meshkat-Rangon/navigation_app'} title={'Navigation App'} des={'This is a simple android UI with some data insertion textfield and a submit button by which we can navigate to another page where the inserted data will be displayed and also a button to get back to the previous page'} list={['Flutter', 'Dart']}/>
      <Cards link={'https://github.com/Meshkat-Rangon/nodesimpleweb'} title={'Node Simple Web'} des={'A simple server side node-js script to host a website'} list={['Node JS', 'JavaScript']}/>
      <Cards link={'https://github.com/Meshkat-Rangon/nodedb_connect'} title={'Node DB Connect'} des={'A simple DB Connection from web'} list={['Node JS', 'JavaScript']}/>

      {showMore && (
        <>
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.1}}>
            <Cards link={'https://github.com/Meshkat-Rangon/node_datainsert'} title={'Node Data Insert'} des={'A Simple Data insertion Web Application'} list={['Node JS', 'JavaScript']}/>
          </motion.div>
          
          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}}>
            <Cards link={'https://github.com/Meshkat-Rangon/node_mongodb'} title={'Node Connect To Mongo DB'} des={'A Simple Data insertion Web Application'} list={['Node JS', 'JavaScript']}/>
          </motion.div>
        </>
      )}

      <div className='flex justify-center items-center'>
        <button onClick={() => setShowMore(!showMore)} className='w-32 h-12 rounded-md text-white hover:text-black border border-textGreen hover:translate-y-2 transition-all duration-300'>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  </section>
  )
}

export default Projects