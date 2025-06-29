import React from 'react';
import ajay from "../assets/ajay-kumar-removebg-preview.png";
import shiva from "../assets/shiva3.png";
import { motion } from 'framer-motion';

const Shiva = () => {
  return (
    <>
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
    <div className='magicpattern w-180 rounded-4xl hscreen'>
        {/* Navbar */}
        <div className='w-full flex flex-row justify-between items-center pt-5 pl-10'>
          <p className='text-3xl font-extrabold text-black flex flex-row justify-center items-center cursor-pointer transition-transform duration-500 hover:scale-110'>
            Shiva Kumar
          </p>
          <div 
            className='w-160 h-12 bg-red-500 mr-10 rounded-3xl flex justify-center items-center'
            style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
          >
            <div className='w-159 h-11 text-white font-bold bg-black rounded-3xl flex flex-row justify-center items-center gap-17'>
              <p className='ml-0 cursor-pointer hover:text-gray-300'>Home</p>
              <p className='cursor-pointer hover:text-gray-300'>About</p>
              <p className='cursor-pointer hover:text-gray-300' onClick={() => setPortfolioMode(true)}>Portfolio</p>
              <p className='cursor-pointer hover:text-gray-300'>Hobby</p>
              <p className='cursor-pointer hover:text-gray-300'>Contact</p>
            </div>
          </div>
        </div>

        {/* main */}
      <div className='w-full h-140 mt-20 flex flex-row justify-center items-center'>
        
        {/* TEXT SECTION */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='w-180 h-140 pb-10 flex flex-col justify-center items-center'
        >
          <h1 className='text-8xl mr-105 font-extrabold'>Shiva</h1>
          <p className='text-4xl font-extrabold text-gray-500'>
            Full Stack Developer | Content Creator
          </p>
          <p className='text-gray-500 mt-7 ml-7 text-xl'>
            A BCA student by degree, a full-stack developer by passion, and a content creator by choice.
            I’m focused on learning, building, and inspiring others through code and content.
          </p>
          <motion.button className='w-50 h-12 mt-10 mr-115 shadow-2xl shadow-black text-white rounded-3xl cursor-pointer'
            style={{background: "linear-gradient(129deg,rgba(162, 0, 255, 1) 0%, rgba(133, 68, 199, 1) 21%, rgba(155, 43, 240, 1) 42%, rgba(230, 21, 104, 1) 47%, rgba(245, 2, 2, 1) 52%, rgba(227, 31, 9, 1) 68%, rgba(222, 23, 9, 1) 82%, rgba(222, 4, 4, 1) 100%)"}}
            animate={{
                y: [0, -8, 0], 
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            }}
          >
            Learn more
          </motion.button>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='w-150 h-140 flex mb-3 justify-center items-center'
        >
          <img 
            src={shiva}
            alt='shiva'
            className='w-200 object-contain drop-shadow-2xl'
          />
        </motion.div>
      </div>
            {/* Small black and white div */}
      <div className='w-60 h-15 mt-[-15px] rounded-r-4xl shadow-2xl shadow-black bg-black border-2 flex justify-center items-center'>
        <div className='w-53 h-8 bg-white rounded-r-4xl'>
          <p></p>
        </div>
      </div>
    </div>
    </div>

    {/* about me */}
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
        <div className='w-full h-150 flex flex-row justify-between items-center'>
            <div className='w-180 h-150 border-2 border-white flex flex-col justsify-center items-center'>

            </div>
            <div className='w-180 h-150 border-2 border-white'>

            </div>
        </div>
    </div>
    </>
  )
}

export default Shiva;