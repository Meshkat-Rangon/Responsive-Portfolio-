import React from 'react'
interface Props{

    link:string;
    title:string;
    des:string;
    list:string[];

}

import { BsFillArrowUpRightSquareFill,BsFillCalendarRangeFill } from "react-icons/bs";


const Cards = ({link,title,des,list}:Props) => {
    
    const listArray = Array.isArray(list) ? list : [];
  return (
    <a href={link}>
    <div className=' w-full h-80 rounded-md bg-slate-800 p-7 justify-centere gap-6 
    hover:translate-y-2 transition-transform duration-300 group'>
        <div className=' flex flex-row justify-between text-teal-400 text-2xl m-2'>
             <BsFillArrowUpRightSquareFill/>
             <BsFillCalendarRangeFill/>

        </div>
        <div>

            <h2  className=' text-teal-400 text-xl hover:text-teal-600'>{title}</h2>

        </div>

        <div >
               <p className=' text-sm mt-3' >{des}</p>
        </div>

        <div>
        <ul className='text-xs md:text-sm text-white flex items-center gap-2 justify-between flex-wrap'>
            {listArray.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
         

    </div>

    </a>
  )
}

export default Cards