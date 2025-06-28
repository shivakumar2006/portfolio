import React, { useState } from 'react'
import { FaEarthAmericas } from "react-icons/fa6";
import ajay from "../assets/ajay-kumar-removebg-preview.png";
import shiva from "../assets/shiva3.png";

const Landing = () => {


  return (
    <>
    <div className='landing'>
      <div className='w-full border-2 flex flex-row justify-between items-center pt-5 pl-10'>
          <p className='text-2xl font-bold text-white flex flex-row justify-center items-center cursor-pointer transition-transform duration-500 hover:scale-110'>ViSi<FaEarthAmericas className='font-bold' />nAries</p>
          <div 
            className='w-112 h-12 bg-red-500 mr-10 rounded-3xl flex justify-center items-center'
            style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
            >
            <div className='w-111 h-11 text-white font-bold bg-black/80 rounded-3xl flex flex-row justify-between items-center'>
              <p className='ml-15 cursor-pointer hover:text-gray-300'>Home</p>
              <p className='cursor-pointer hover:text-gray-300'>About</p>
              <p className='mr-15 cursor-pointer hover:text-gray-300'>Portfolio</p>
            </div>
          </div>
      </div>

      <div className='w-full h-80 mt-30 flex flex-row justify-evenly items-center'>
  {/* First Circle Image */}
      <div className='w-80 h-80 bg-white/10 border border-white/30 shadow-white/50 shadow-xl/30 hover:bg-white/30 transition-all duration-500 rounded-full flex justify-center items-center overflow-hidden'>
        <img 
          src={ajay}
          className='w-80 h-80 '
        />
      </div>

      {/* Second Circle Image */}
      <div className='w-80 h-80 bg-white/10 border border-white/30 shadow-white/50 shadow-xl/30 hover:bg-white/30 transition-all duration-500 rounded-full flex justify-center items-center overflow-hidden'>
        <img 
          src={shiva}
          className='w-80 h-80 '
        />
      </div>
      </div>

      <div className='w-full h-12 my-5 flex flex-row justify-evenly items-center'>
        <div className='w-70 h-12 rounded-3xl mr-5 bg-white flex justify-center items-center'
          style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
        >
          <div className='w-68 h-12 rounded-3xl bg-black/80 text-white font-bold flex justify-center items-center'>
            AJAY KUMAR
          </div>
        </div>
        <div className='w-70 h-12 rounded-3xl bg-white flex justify-center items-center'
          style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
        >
          <div className='w-68 h-12 rounded-3xl bg-black/80 text-white font-bold flex justify-center items-center'>
            SHIVA
          </div>
        </div>
      </div>

      <div className='w-full mt-30 flex justify-center items-center'>
        <div className='w-full h-14 bg-white/10 border-white/30 border flex items-center justify-center'>
          <p className='text-white font-extralight text-xl text-center'>We’re not just building projects; we’re building purpose.</p>
        </div>
      </div>
    </div>

    <div className='w-screen h-screen flex flex-col justify-evenly items-center'
      style={{background: "linear-gradient(119deg,rgba(5, 0, 0, 1) 0%, rgba(59, 11, 107, 1) 21%, rgba(60, 15, 94, 1) 42%, rgba(92, 41, 82, 1) 47%, rgba(125, 27, 27, 1) 52%, rgba(105, 29, 21, 1) 68%, rgba(66, 9, 5, 1) 82%, rgba(5, 0, 0, 1) 99%)"}}
    >
      <h1 className='text-white text-5xl font-bold'>About US</h1>
      <div className='w-250 h-120 bg-white/10 rounded-xl flex justify-center items-center'>

      </div>
    </div>
    </>
  )
}

export default Landing;