import React, { useRef, useEffect } from 'react';
import ajay from "../assets/ajay-kumar-removebg-preview.png";
import shiva from "../assets/shiva3.png";
import { motion, useInView, useAnimation } from 'framer-motion';

const Shiva = () => {

    const aboutRef = useRef(null);
    const isInView = useInView(aboutRef, { margin: "-100px"});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0}); 
        } else {
            controls.start({ opacity: 0, y: 100}) // reset when out of view
        }
    }, [isInView, controls])

    const skills = [
        {name: "React", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "TailwindCSS", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "HTML", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-orange-400 shadow-[0_0_60px_rgba(255,165,0,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "CSS", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "Javascript", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", className: 'w-30 h-32 border-2 bg-black/20 border-yellow-300 shadow-[0_0_60px_rgba(255,255,0,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "Redux", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg", className: 'w-30 h-32 border-2 bg-black/20 border-purple-500 shadow-[0_0_60px_rgba(128,0,128,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "GOlang", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "MongoDB", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-green-600 shadow-[0_0_60px_rgba(0,128,0,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "C++", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "C", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "SupaBase", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-green-600 shadow-[0_0_60px_rgba(0,128,0,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "MySQL", pic: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-800 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},     
        {name: "Node.JS", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-green-600 shadow-[0_0_60px_rgba(0,128,0,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},   
    ]

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
              <p className='cursor-pointer hover:text-gray-300' onClick={() => setPortfolioMode(true)}>Skills</p>
              <p className='cursor-pointer hover:text-gray-300'>Projects</p>
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
    <motion.div 
        className='w-screen h-screen bg-black flex justify-center items-center'
        // style={{background: "linear-gradient(171deg,rgba(23, 4, 48, 1) 0%, rgba(16, 3, 31, 1) 100%)"}}
        ref={aboutRef}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
    >
        <div className='w-full h-150 flex flex-row justify-between items-center'>

          {/* Left Section */}
          <div className='w-150 h-150 flex justify-center items-center relative'>

            {/* Overlapping Circles with Image in Between */}
          <div 
            className='w-100 h-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            >

            {/* White Background (Bottom) */}
            <div className='w-full h-full rounded-tl-full bg-white absolute top-0 left-0 z-0'></div>

            {/* Gray Background (Top Layer) */}
            <div className='w-full h-full rounded-tr-full bg-gray-400 absolute top-0 left-0 z-10'></div>

            {/* Image (Middle Layer) */}
            <img 
              src={shiva}
              alt='shiva'
              className='w-full h-full object-contain absolute shadow-black top-0 left-0 z-20 drop-shadow-2xl'
            />
        </div>
        <div className='w-110 h-50 mt-120 rounded-full bg-black z-30 flex justify-center items-center text-white text-4xl font-extrabold'>
            <p className='pb-20'></p>
        </div>
    </div>

    {/* Right Section */}
    <div className='w-180 h-150 mr-25 flex flex-row justify-center items-center'>
        <div className='w-40 h-150 pl-30 flex flex-col justify-center items-center'>
            <div className='w-4 h-4 bg-purple-900 rounded-full'></div>
            <div className='h-40 border border-purple-500'></div>
            <div className='w-4 h-4 bg-pink-600 rounded-full'></div>
            <div className='h-30 border border-red-500'></div>
            <div className='w-4 h-4 bg-red-900 rounded-full'></div>
        </div>
        <div className='w-140 h-150 flex flex-col justify-center items-center'>
            <p className='text-md text-white font-extralight mr-17'><span className='text-xl font-extrabold text-gray-400'>Role:</span> Full-Stack Developer (Project-Based)</p>
            <p className='text-md text-white font-extralight'><span className='text-xl font-extrabold text-gray-400'>Status:</span> BCA Student | Content Creator on YouTube</p>
            <p className='text-md text-white ml-10 font-extralight'><span className='text-xl font-extrabold text-gray-400'>Tools:</span> React, Tailwind CSS, Redux Toolkit, Supabase, Go</p>
            <p className='text-xl text-white mt-8 mr-75'>Highlight:</p>
            <p className='text-md text-white ml-25 mt-3'>Built complete apps with authentication, filters, pagination, and responsive UI</p>
            <p className='text-md text-white ml-25'>Worked with external APIs like TMDB and Spotify for real-time data</p>
            <p className='text-md text-white ml-25'>Created and deployed full-stack projects to showcase practical learning</p>
            <p className='text-md text-white ml-25'>Collaborated closely with mentor to follow real-world development practices</p>
            <p className='text-md text-white ml-25'>Sharing my learning journey and tech content on YouTube to help other developers</p>
        </div>
    </div>
  </div>
            
            
    </motion.div>

        {/* skills */}
        <div 
            className='w-full h-screen bg-pink-500'
            // style={{background: "linear-gradient(203deg,rgba(0, 0, 0, 1) 0%, rgba(23, 1, 10, 1) 17%, rgba(38, 2, 2, 1) 30%, rgba(22, 3, 43, 1) 60%, rgba(34, 30, 56, 1) 89%, rgba(0, 0, 0, 1) 100%)"}}
            style={{background: "linear-gradient(171deg,rgba(23, 4, 48, 1) 0%, rgba(16, 3, 31, 1) 100%)"}}
        >
            <div className='w-full text-white text-6xl font-extrabold flex justify-center items-center pt-20'>
                    My Skills
            </div>
            <div className='w-full min-h-140 mt-20 ml-[-40px] flex flex-wrap justify-center overflow-visible'>
                {skills?.map((item, index) => (
                <motion.div 
                  key={index}
                  className={item.className}
                  whileHover={{ y: 0}}
                  initial={{ y: 0 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <img src={item.pic} className='w-18' />
                  <p className='text-white mt-2'>{item.name}</p>
                </motion.div>
                ))}
            </div>
            </div>
            
        {/* projects */}
        <div className='w-full min-h-screen'
            style={{background: "linear-gradient(94deg,rgba(5, 0, 8, 1) 0%, rgba(75, 5, 102, 1) 23%, rgba(34, 6, 92, 1) 77%, rgba(0, 0, 0, 1) 100%)"}}
        >
            <div className='w-full text-white font-bold pt-10 pl-15 text-6xl'>
                My<br />Projects
            </div>
            <div className='w-full min-h-screen border-2 flex flex-col'>
                <div className='w-full flex flex-row justify-evenly pt-20 items-center'>
                    <div className='w-140 h-80 rounded-2xl bg-white/10'>
                        <div className='w-140 h-80 rounded-2xl bg-black translate-y-4 -translate-x-4'>
                            <img />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </>
  )
}

export default Shiva;