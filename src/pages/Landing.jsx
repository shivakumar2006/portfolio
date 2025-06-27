import React from 'react'
import { FaEarthAmericas } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className='landing'>
      <div className='w-full border-2 flex flex-row justify-between items-center pt-5 pl-10'>
          <p className='text-2xl font-bold text-white flex flex-row justify-center items-center cursor-pointer transition-transform duration-500 hover:scale-110'>ViSi<FaEarthAmericas className='font-bold' />nAries</p>
          <div className='w-110 h-10 mr-10 mt-1 text-white bg-white/10 hover:bg-white/20 rounded-3xl flex flex-row justify-between items-center'>
            <p className='cursor-pointer pl-15'>Home</p>
            <p className='cursor-pointer'>About</p>
            <p className='cursor-pointer pr-15'>Portfolio</p>
          </div>
      </div>
    </div>
  )
}

export default Landing;