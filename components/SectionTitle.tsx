import React from 'react'
interface Props{

    title:string;

}

const SectionTitle = ({title}:Props) => {
  return (
    <h2 className='mt-20 font-semibold text-2xl flex items-center text-white hover:text-slate-950 hover:translate-y-2 transition-all duration-300'>
      {title}
      <span className='hidden md:inline-flex md:w-60 lg:w-72 h-[1px] bg-white ml-6'></span>
    </h2>
  )
}

export default SectionTitle