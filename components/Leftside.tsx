

import {FaGithub , FaFacebookSquare, FaLinkedinIn,FaTwitter} from 'react-icons/fa';

const Leftside = () => {
  return (
    <div className=' w-full h-full flex flex-col justify-end items-center gap-4'>

      <div className='flex flex-col gap-4'>
       <a href="https://github.com/Meshkat-Rangon" target='_blank'>
        <span className=' w-30 h-30 text-xl bg-hoverColor rounded-full inline-flex hover:translate-y-2 transition-all duration-300'>
            <FaGithub/>
        </span>
       </a>
      </div>
      <div className='flex flex-col gap-4'>
       <a href="https://www.facebook.com/meshkat" target='_blank'>
        <span className=' w-30 h-30 text-xl bg-hoverColor rounded-full inline-flex hover:translate-y-2 transition-all duration-300'>
            <FaFacebookSquare/>
        </span>
       </a>
      </div>
      <div className='flex flex-col gap-4'>
       <a href="https://bd.linkedin.com/in/meshkat-azad-rangon-68570a135" target='_blank'>
        <span className=' w-30 h-30 text-xl bg-hoverColor rounded-full inline-flex hover:translate-y-2 transition-all duration-300'>
            <FaLinkedinIn/>
        </span>
       </a>
      </div>
      <div className='flex flex-col gap-4'>
       <a href="https://twitter.com/meshkat_rangon" target='_blank'>
        <span className=' w-30 h-30 text-xl bg-hoverColor rounded-full inline-flex hover:translate-y-2 transition-all duration-300'>
            <FaTwitter/>
        </span>
       </a>
      </div>

      <div className=' w-[2px] h-32 bg-white hover:translate-y-2 transition-all duration-300'>

      </div>


    </div>
  )
}

export default Leftside