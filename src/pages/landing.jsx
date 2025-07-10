import React, { useState, useRef } from 'react';
import { FaEarthAmericas } from "react-icons/fa6";
import { motion, AnimatePresence } from 'framer-motion';
import ajay from "../assets/ajay-kumar-removebg-preview.png";
import shiva from "../assets/shiva3.png";
import { useNavigate } from 'react-router-dom';
import { scroll } from 'framer-motion/dom';

const Landing = () => {

  const [portfolioMode, setPortfolioMode] = useState(false);
  const navigate = useNavigate();
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <>
      {/* FIRST SECTION: LANDING */}
      <motion.div
        initial={{ scale: 1 }}
        animate={portfolioMode ? { scale: 1.2, filter: "blur(3px)", opacity: 0.3 } : { scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="landing relative z-0"
      >
        {/* Navbar */}
        <div className='w-full border-2 flex flex-row justify-between items-center pt-5 md:pl-10 gap-10'>
          <p className='md:text-2xl text-sm font-bold md:ml-0.5 text-white flex flex-row justify-center items-center cursor-pointer transition-transform duration-500 hover:scale-110'>
            ViSi<FaEarthAmericas className='font-bold' />nAries
          </p>

          <div 
            className='md:w-112 w-60 mx-auto h-8 md:h-12 bg-red-500 md:mr-10 rounded-3xl flex justify-center items-center'
            style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
          >
            <div className='md:w-111 md:h-11 w-58 h-7 text-white font-bold bg-black/80 rounded-3xl flex flex-row justify-around items-center gap-5'>
              <p className='md:ml-15 ml-4 cursor-pointer hover:text-gray-300'>Home</p>
              <p className='cursor-pointer hover:text-gray-300' onClick={scrollToAbout}>About</p>
              <p className='mr-15 cursor-pointer hover:text-gray-300' onClick={() => setPortfolioMode(true)}>Portfolio</p>
            </div>
          </div>
        </div>

        {/* Ajay & Shiva Circles */}
        <div className='md:w-full min-h-80  mt-30 flex flex-row sm:flex-row justify-evenly items-center gap-5'>
          <div className='md:w-80 md:min-h-80 w-40 h-40 bg-white/10 border border-white/30 shadow-white/50 shadow-xl/30 hover:bg-white/30 transition-all duration-500 rounded-full flex justify-center items-center overflow-hidden'>
            <img src={ajay} className='w-80 h-80 object-contain' />
          </div>
          <div className='md:w-80 md:min-h-80 w-40 h-40 bg-white/10 border border-white/30 shadow-white/50 shadow-xl/30 hover:bg-white/30 transition-all duration-500 rounded-full flex justify-center items-center overflow-hidden'>
            <img src={shiva} className='w-80 h-80 object-contain ' />
          </div>
        </div>

        {/* Name Tags */}
        <div className='w-full h-12 my-5 flex flex-row justify-evenly items-center'>
          <div className='md:w-70 md:h-12 w-40 rounded-3xl mr-5 bg-white flex justify-center items-center'
            style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
          >
            <div className='w-68 h-12  rounded-3xl bg-black/80 text-white font-bold flex justify-center items-center'>
              AJAY KUMAR
            </div>
          </div>
          <div className='md:w-70 md:h-12 w-40 rounded-3xl bg-white flex justify-center items-center'
            style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
          >
            <div className='w-68 h-12 rounded-3xl bg-black/80 text-white font-bold flex justify-center items-center'>
              SHIVA
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className='w-full mt-30 flex justify-center items-center'>
          <div className='w-full h-14 bg-white/10 border-white/30 border flex items-center justify-center'>
            <p className='text-white font-extralight text-xl text-center'>
              We’re not just building projects; we’re building purpose.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Portfolio Overlay on top of .landing */}
      <AnimatePresence>
        {portfolioMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='absolute top-0 left-0 w-full md:w-screen max-w-none mx-auto h-[760px] md:min-h-full z-50 flex flex-col justify-center items-center bg-black/90'
          >
            <h1 className='text-white text-4xl font-bold mb-6'>Select a Portfolio</h1>

            <div className='flex gap-12'>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className='md:w-60 md:h-60 w-39 h-39 bg-white text-black rounded-full flex flex-col justify-center items-center cursor-pointer'
                onClick={() => navigate("/ajay/portfolio")}
              >
                <img src={ajay} className='w-28 h-28 rounded-full object-cover mb-2' />
                <p className='font-semibold '>Ajay Kumar</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className='md:w-60 md:h-60 w-39 h-39 bg-white text-black rounded-full flex flex-col justify-center items-center cursor-pointer'
                onClick={() => navigate("/shiva/portfolio")}
              >
                <img src={shiva} className='w-28 h-28 rounded-full object-cover mb-2' />
                <p className='font-semibold'>Shiva</p>
              </motion.div>
            </div>

            <p
              className='mt-10 text-white underline text-sm cursor-pointer hover:text-gray-300'
              onClick={() => setPortfolioMode(false)}
            >
              ← Go Back
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* SECOND SECTION: About Us (No Touch) */}
      <div ref={aboutRef} className='md:w-screen w-full md:max-w-none mx-auto min-h-screen flex flex-col justify-evenly items-center'
        style={{background: "linear-gradient(119deg,rgba(5, 0, 0, 1) 0%, rgba(59, 11, 107, 1) 21%, rgba(60, 15, 94, 1) 42%, rgba(92, 41, 82, 1) 47%, rgba(125, 27, 27, 1) 52%, rgba(105, 29, 21, 1) 68%, rgba(66, 9, 5, 1) 82%, rgba(5, 0, 0, 1) 99%)"}}
      >
        <h1 className='text-white mt-10 mb-10 text-5xl font-Mooli font-bold'>About US</h1>
        <div className='md:w-280 w-[340px] min-h-120 bg-white/10 rounded-xl flex justify- items-center'>
          <p className='font-mooli text-2xl shadow-xl text-white text-center'>
            We are a mentor-mentee duo driven by learning, building, and growth.<br />
            I’m a college student passionate about development,<br />
            exploring the world of frontend and backend technologies through real-world projects. <br />
            Guided by my mentor, a Senior Software Engineer at Victoria’s Secret & Co.,<br />
            this journey has been about more than just code — it’s about mindset, clarity, and constant improvement. <br />
            Together, we believe in sharing knowledge, writing clean code, and turning ideas into meaningful experiences.
          </p>
        </div>
        <button className='btn-grad mb-5'
        >
          Portfolio
        </button>
      </div>
    </>
  );
};

export default Landing;
