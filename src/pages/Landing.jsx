import React, { useState } from 'react'
import { FaEarthAmericas } from "react-icons/fa6";

const Landing = () => {


  return (
    <div className='landing'>
      <div className='w-full border-2 flex flex-row justify-between items-center pt-5 pl-10'>
          <p className='text-2xl font-bold text-white flex flex-row justify-center items-center cursor-pointer transition-transform duration-500 hover:scale-110'>ViSi<FaEarthAmericas className='font-bold' />nAries</p>
          <div 
            className='w-112 h-12 bg-red-500 mr-10 rounded-3xl flex justify-center items-center'
              style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
            >
            <div className='w-110 h-10 text-black font-extrabold bg-white rounded-3xl flex flex-row justify-between items-center'>
              <p className='ml-15 cursor-pointer hover:text-gray-600'>Home</p>
              <p className='cursor-pointer hover:text-gray-600'>About</p>
              <p className='mr-15 cursor-pointer hover:text-gray-600'>Portfolio</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Landing;