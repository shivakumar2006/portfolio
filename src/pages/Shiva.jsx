import React, { useRef, useEffect, useState } from 'react';
import ajay from "../assets/ajay-kumar-removebg-preview.png";
import shiva from "../assets/shiva3.png";
import movie from "../assets/movie.jpg";
import video from "../assets/video.mp4";
import spotlight from "../assets/spotlight.mp4";
import cart from "../assets/cart.mp4";
import crypto from "../assets/crypto.mp4";
import emailjs from "@emailjs/browser";
import { motion, useInView, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const Shiva = () => {

    const aboutRef = useRef(null);
    const homeRef = useRef(null);
    const skillRef = useRef(null);
    const projectRef = useRef(null);
    const contactRef = useRef(null);
    const formRef = useRef();
    const isInView = useInView(aboutRef, { margin: "-100px"});
    const controls = useAnimation();
    const Navigate = useNavigate();
    const [ popupVideo, setPopupVideo ] = useState(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth'})
    }

    const scrollToSkills = () => {
        skillRef.current?.scrollIntoView({ behavior: 'smooth'})
    }

    const scrollToProject = () => {
        projectRef.current?.scrollIntoView({ behavior: 'smooth'})
    }
    
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth'})
    }
     
    const ScrollToHome = () => {
        homeRef.current?.scrollIntoView({ behavior: 'smooth'})
    }

    useEffect(() => {
        if (isInView) {
            controls.start({ opacity: 1, y: 0}); 
        } else {
            controls.start({ opacity: 0, y: 100}) // reset when out of view
        }
    }, [isInView, controls])

    const sendEmail = (e) => {
        e.preventDefault(),

        emailjs.sendForm(
            'service_gfmg64d',             // ✅ Service ID
            'template_1m4pdhj',            // ✅ Template ID
            formRef.current,
            'EdzXORZsoIBGCNMNl'           // ✅ Public Key
        )
        .then(() => {
            alert('Message sent successfully');
            e.target.reset(); // reset form fileds 
        })
        .catch((error) => {
            alert('Failed to send message', + error.text);
        })

    }

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
        {name: "FramerMotion", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", className:'w-30 h-32 border-2 bg-white/30 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
        {name: "Netlify", pic:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg", className:'w-30 h-32 border-2 bg-black/20 border-blue-300 shadow-[0_0_60px_rgba(59,130,246,0.5)] rounded-2xl flex flex-col justify-center items-center ml-25 mt-5'},
    ]

    const projects = [
        {
            tag: "Social",
            name: "Spotlight Labs",
            description: "Spotlight Labs is a project built with React, TailwindCSS, Redux Toolkit, and Go for the backend. It features manual email authentication using Supabase SQL, SMTP with Google App Passwords, and custom APIs for signup/login. The project focuses on secure, custom-built auth without relying on third-party OAuth services.",
            video: spotlight,
            link: "https://spotlig.netlify.app/"
        },
        {
            tag: "Movie",
            name: "Movie Recommendation App",
            description: "A modern movie recommendation web app built with React, TailwindCSS, Redux Toolkit, and RTK Query. It integrates Supabase for OAuth-based authentication (Google & GitHub) and fetches real-time movie data using the TMDB API. Users can explore trending movies, filter by genre, language, release year, and ratings, and enjoy a smooth, responsive UI with dark/light mode support.",
            video: video,
            link: "https://moviere.netlify.app/"
        },
        {
            tag: "Cart",
            name: "Cart",
            description: "Cart App is a modern shopping cart interface built with React, TailwindCSS, Redux Toolkit, and RTK Query, designed with a primary focus on learning and mastering Redux state management. It includes features like add/remove items, quantity updates, and efficient data fetching.",
            video: cart,
            link: "https://shivaredux.netlify.app/"
        },
        {
            tag: "Crypto",
            name: "Crypto Currency App",
            description: "Crypto App is a sleek and responsive cryptocurrency tracking app built with React, TailwindCSS, Ant Design, and CryptoRanking API via RapidAPI. It displays real-time data on top coins, prices, market trends, and more—perfect for learning API integration and UI libraries.",
            video: crypto,
            link: "https://shivacrypto.netlify.app/"
        },
    ]

  return (
    <>
    <div ref={homeRef}  className='lg:w-screen w-full lg:max-w-none mx-auto min-h-screen bg-black flex flex-row justify-center items-center'>
    <div className='magicpattern rounded-4xl'>
        {/* Navbar */}
        <div className='w-full flex md:flex-row flex-col justify-between items-center md:pt-5 pl-10 gap-3'>
          <p className='md:text-3xl mt-5 text-sm mr-10 font-extrabold text-black flex flex-row justify-center items-center cursor-pointer transition-transform duration-500 hover:scale-110'>
            Shiva Kumar
          </p>
          <div 
            className='lg:w-160 max-[409px]:w-80 min-[410px]:w-93 mr-10 h-14 bg-red-500 rounded-3xl flex justify-center items-center z-50'
            style={{background: "linear-gradient(90deg,rgba(79, 0, 158, 1) 1%, rgba(120, 26, 214, 1) 21%, rgba(181, 107, 255, 1) 42%, rgba(255, 89, 89, 1) 52%, rgba(209, 13, 6, 1) 68%, rgba(133, 0, 0, 1) 99%)"}}
          >
            <div className='lg:w-159 max-[409px]:w-79 min-[410px]:w-92 h-12 text-white text-[13px] lg:text-lg font-bold bg-black rounded-3xl flex flex-row justify-center items-center lg:gap-12 max-[409px]:gap-0 min-[410px]:gap-2'>
                {[
                  { label: "Home", onClick: () => Navigate("/") },
                  { label: "About", onClick: scrollToAbout },
                  { label: "Skills", onClick: scrollToSkills },
                  { label: "Projects", onClick: scrollToProject },
                  { label: "Contact", onClick: scrollToContact },
                ].map(({ label, onClick }) => (
                  <p
                    key={label}
                    className="px-3 py-2 text-center cursor-pointer hover:text-gray-300 whitespace-nowrap"
                    onClick={onClick}
                  >
                    {label}
                  </p>
                ))}
            </div>
          </div>
        </div>

        {/* main */}
      <div className='w-full md:h-140 md:mt-20 flex md:flex-row flex-col justify-center items-center'>
        
        {/* TEXT SECTION */}
        <motion.div
         
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='md:w-180 md:h-140 pb-10 flex flex-col justify-center items-center order-2 md:order-1'
        >
          <h1 className='lg:text-8xl text-6xl lg:mr-106 mt-[-60px] max-[409px]:ml-0 font-extrabold'>Shiva</h1>
          <p className='md:text-4xl text-2xl font-extrabold mt-5 md:ml-0 ml-5 text-gray-500'>
            Full Stack Developer | Content Creator
          </p>
          <p className='text-gray-500 mt-7 md:ml-7 ml-3 text-xl'>
            Bachelor of Computer Applications (BCA) student actively building real-world full-stack projects using React, Go, TailwindCSS, Supabase, and Redux. Passionate about software engineering, problem-solving, and sharing my journey to inspire others. Currently focused on mastering scalable architecture, API design, and clean code practices through hands-on learning and content creation.
        </p>
          {/* {/* <motion.button className='w-50 h-12 mt-10 mr-115 shadow-2xl shadow-black text-white rounded-3xl cursor-pointer'
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
          </motion.button> */}
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='md:w-150 w-full h-140 flex mt-[-50px] justify-center items-center order-1 md:order-2'
        >
          <img 
            src={shiva}
            alt='shiva'
            className='md:w-200 w-full object-contain drop-shadow-2xl'
          />
        </motion.div>
      </div>
            {/* Small black and white div */}
      <div className='md:w-60 w-30 h-15 md:mt-[-15px] rounded-r-4xl shadow-2xl shadow-black bg-black border-2 flex justify-center items-center'>
        <div className='md:w-53 w-25 h-8 bg-white rounded-r-4xl'>
          <p></p>
        </div>
      </div>
    </div>
    </div>

    {/* about me */}
    <motion.div
    ref={aboutRef} 
        className='md:w-screen w-full md:max-w-none mx-auto min-h-screen bg-black flex justify-center items-center'
        // style={{background: "linear-gradient(171deg,rgba(23, 4, 48, 1) 0%, rgba(16, 3, 31, 1) 100%)"}}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeInOut" }}
    >
        <div className='md:w-full w-screen md:h-150 min-h-screen flex flex-col md:flex-row justify-between items-center'>

          {/* Left Section */}
          <div className='w-150 h-150 flex justify-center items-center relative'>

            {/* Overlapping Circles with Image in Between */}
          <div 
            className='md:w-100 md:h-100 w-80 h-80 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
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
        <div className='md:w-110 md:h-50 w-80 h-30 mt-120 rounded-full bg-black z-30 flex justify-center items-center text-white text-4xl font-extrabold'>
            <p className='pb-20'></p>
        </div>
    </div>

    {/* Right Section */}
    <div className='md:w-180 md:h-150 md:mr-25 flex flex-row justify-center items-center'>
        <div className='w-40 h-150 md:pl-50 md:pr-[-150px] pl-40 flex flex-col justify-center items-center gap-2'>
            <div className='w-4 h-4 bg-purple-900 rounded-full'></div>
            <div className='h-40 border border-purple-500'></div>
            <div className='w-4 h-4 bg-pink-600 rounded-full'></div>
            <div className='h-30 border border-red-500'></div>
            <div className='w-4 h-4 bg-red-900 rounded-full'></div>
        </div>
        <div className='md:w-120 w-60 md:ml-20 md:pl-30 mr-50 ml-8 h-170 text-white max-[410px]:text-[15px] flex flex-col justify-center items-center'>
            <p className='text-md text-white font-extralight mr-17'><span className='text-xl font-extrabold text-gray-400'>Role:</span> Full-Stack Developer (Project-Based)</p>
            <p className='text-md text-white font-extralight'><span className='text-xl font-extrabold text-gray-400'>Status:</span> BCA Student | Content Creator on YouTube</p>
            <p className='text-md text-white md:ml-0 ml-0 font-extralight'><span className='text-xl font-extrabold text-gray-400'>Tools:</span> React, Tailwind CSS, Redux Toolkit, Supabase, Go</p>
            <p className='md:text-xl text-white text-[15px] mt-8 mr-42 md:mr-75'>Highlight:</p>
            <p className='text-md text-white ml-10 mt-3'>Built complete apps with authentication, filters, pagination, and responsive UI</p>
            <p className='text-md text-white ml-10'>Worked with external APIs like TMDB and Spotify for real-time data</p>
            <p className='text-md text-white ml-10'>Created and deployed full-stack projects to showcase practical learning</p>
            <p className='text-md text-white ml-10'>Collaborated closely with mentor to follow real-world development practices</p>
            <p className='text-md text-white ml-10'>Sharing my learning journey and tech content on YouTube to help other developers</p>
        </div>
    </div>
  </div>
            
            
    </motion.div>

        {/* skills */}
        <div 
            ref={skillRef}
            className='md:w-screen w-full md:max-w-none mx-auto min-h-screen bg-pink-500'
            // style={{background: "linear-gradient(203deg,rgba(0, 0, 0, 1) 0%, rgba(23, 1, 10, 1) 17%, rgba(38, 2, 2, 1) 30%, rgba(22, 3, 43, 1) 60%, rgba(34, 30, 56, 1) 89%, rgba(0, 0, 0, 1) 100%)"}}
            style={{background: "linear-gradient(171deg,rgba(23, 4, 48, 1) 0%, rgba(16, 3, 31, 1) 100%)"}}
        >
            <div className='w-full text-white text-6xl font-extrabold flex justify-center items-center pt-20'>
                    My Skills
            </div>
            <div className='md:w-screen min-h-screen mt-20 lg:pl-25 ml-[-100px] flex flex-wrap justify-center items-center overflow-visible'>
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
            {/* End of Skills Section */}
            {/* <div className="wave-container">
              <svg viewBox="0 0 1440 320" className="wave">
                <path
                  fill="#360f4d"  
                  fillOpacity="1"
                  d="M0,192L60,176C120,160,240,128,360,138.7C480,149,600,203,720,208C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
              </svg>
            </div> */}

            </div>
            
        {/* projects */}
        <div 
            ref={projectRef}
            className='lg:w-screen w-full lg:max-w-none mx-auto min-h-screen'
            style={{background: "linear-gradient(94deg,rgba(5, 0, 8, 1) 0%, rgba(75, 5, 102, 1) 23%, rgba(34, 6, 92, 1) 77%, rgba(0, 0, 0, 1) 100%)"}}
        >
            
            <div className='w-full text-white font-bold pt-10 pl-15 text-6xl'>
                My<br />Projects
            </div>
            <div className='w-full min-h-screen flex flex-col gap-5'>
                <div className='md:w-full w-[18px] flex flex-col justify-evenly pt-20 items-center gap-5'>
                    {projects?.map((project, index) => {
                        const isEven = index % 2 == 0;
                        const videoRef = useRef(null);
                        return (
                        <div 
                            key={index} 
                            className={`w-full flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-evenly`}
                            onMouseEnter={() => videoRef.current?.play()} // play video 
                            onMouseLeave={() => {
                                videoRef.current?.pause(); // pause video 
                                videoRef.current.currentTime = 0 // video reset
                            }}
                        >
                         <div className='lg:w-140 lg:h-80 max-[409px]:w-80 max-[409px]:h-45 min-[410px]:w-90 min-[410px]:ml-105 max-[409px]:ml-90 md:ml-0 rounded-2xl bg-white/20'>
                        <div className='lg:w-140 lg:h-80 max-[409px]:w-80 max-[409px]:h-45 min-[410px]:w-90 ml-0 rounded-2xl bg-black translate-y-4 -translate-x-4 overflow-hidden relative group '>
                          <video 
                            ref={videoRef}
                            src={project.video}
                            className='w-full h-full rounded-2xl transition-all duration-300 group-hover:scale-105'
                            muted
                            preload='none'
                            autoPlay
                            loop 
                            playsInline
                          />
                          {/* Play icon on hover */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div 
                                className="w-14 h-14 bg-black/40 rounded-full flex items-center justify-center cursor-pointer"
                                onClick={() => setPopupVideo(project.video)}    
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                    </div>  
                    <div className='md:w-150 md:h-90 w-80 ml-90 md:ml-0 mt-5 flex flex-col'>
                        <div className='w-full flex mt-5 flex-row gap-5'>
                            <div className='w-20 h-8 rounded-2xl text-[10px] cursor-pointer hover:bg-white/20 text-white border border-white flex justify-center items-center'>
                                <p>{project.tag}</p>
                            </div>
                            <div className='w-20 h-8 rounded-2xl text-[10px] cursor-pointer hover:bg-white/20 text-white border border-white flex justify-center items-center'>
                                <p>Web</p>
                            </div>
                            
                        </div>
                        <div className='w-full mt-10 flex flex-col'>
                            <p className='text-white text-2xl'>{project.name}</p>
                            <p className='text-white text-sm mt-10'>{project.description}</p>
                            <a 
                              href={project.link}
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              <button 
                                className="btn-grad mt-15 w-50 h-12 text-[12px] text-sm shadow-none flex justify-center items-center cursor-pointer"
                              >
                                Project Link
                              </button>
                            </a>
                        </div>
                    </div>
                    </div>
                        )
                    })}
                    {popupVideo && (
                      <div className="fixed top-0 left-0 w-full h-full bg-black/70 z-50 flex justify-center items-center">
                        <div className="relative w-[80%] max-w-[720px] bg-black rounded-xl p-4">

                          {/* Close Button */}
                          <button
                            className="absolute top-2 right-[-3px] text-white text-4xl cursor-pointer"
                            onClick={() => setPopupVideo(null)}
                          >
                            &times;
                          </button>

                          {/* Video Player */}
                          <video
                            src={popupVideo}
                            className="w-full h-auto rounded-xl"
                            controls
                            autoPlay
                          />
                        </div>
                      </div>
                    )}

                
                </div>
            </div>
        </div>

        {/* Contact */}
        <div 
        ref={contactRef}
        className='md:w-screen w-full md:max-w-none mx-auto min-h-screen'
            style={{background: "linear-gradient(51deg,rgba(64, 6, 102, 1) 0%, rgba(97, 5, 133, 1) 17%, rgba(7, 1, 10, 1) 69%, rgba(0, 0, 0, 1) 100%)"}}
        >
            <div className='w-full pt-15 md:pl-15 pl-9 text-white text-6xl font-bold'>
                <p>Contact me</p>
            </div>
             <div className='w-full mt-10 flex md:flex-row flex-col justify-center items-center'>
               <div className='md:w-180 w-90 flex flex-col jusitfy-center items-center'>
                    <div className='w-full h-40 flex flex-row justify-evenly items-center'>
                        <FaLinkedin 
                        className='rounded-xl cursor-pointer bg-white text-blue-500 md:text-8xl text-6xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_#fff]'
                        onClick={() => window.open("https://www.linkedin.com/in/ajay-kumar-15498a80/", "_blank")}
                        />
                        <FaGithub 
                        className='rounded-full cursor-pointer text-black bg-white md:text-8xl text-6xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_#fff]'
                        onClick={() => window.open("https://github.com/shivakumar2006", "_blank")}
                        />
                        <FaYoutube 
                        className='rounded-xl cursor-pointer h-13 bg-white text-red-500 md:text-8xl text-6xl transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_20px_#fff]'
                        onClick={() => window.open("https://www.youtube.com/@shivakumar2006-j", "_blank")}
                        />
                    </div>
                    <div className='md:w-150 mt-10 md:text-3xl h-20 text-center'>
                        <p className='text-white w-full max-[409px]:text-[10px] lg:text-md'>"Code hard. Train hard. Stay real. If you’ve got a project, a vision, or just some fire to share — I’m listening."</p>
                    </div>

                    <a
                      href="/resume.pdf"
                      download="resume.pdf"
                      className="flex items-center md:mt-35 mt-20 mb-10 gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300"
                    >
                      <FaDownload /> Download CV
                    </a>
                    
                    {/* <div className='w-full text-white flex flex-row justify-evenly items-center'>
                        <p className='ml-[-12px]'>Linkedin</p>
                        <p className='ml-3'>Github</p>
                        <p className='mr-[-10px]'>Youtube</p>
                    </div> */}
                </div>
                <div className='lg:w-180 max-[409px]:w-93 min-[410px]:w-100 flex lg:flex-col flex-row jusitfy-center items-center'>
                    <form 
                        ref={formRef}
                        onSubmit={sendEmail}
                        className='lg:w-160 lg:h-140 min-[410px]:w-95 min-[410px]:h-141 max-[409px]:w-85 ml-3 max-[409px]:ml-4 bg-white/10 rounded-3xl flex flex-col'>
                        <h1 className='text-white text-3xl text-center mt-10 font-bold'>Get In Touch</h1>
                        <div className='w-full h-18 mt-10 flex flex-row justify-evenly items-center'>
                            <div className='md:w-80 w-47 md:h-18 max-[409px]:ml-2 flex flex-col justify-center items-center gap-3'>
                                <p className='text-white text-md font-bold md:mr-50 mr-25'>Name</p>
                                <input 
                                    type='text'
                                    name='from_name'
                                    placeholder='Your name'
                                    required
                                    className='lg:w-70 min-[410px]:w-45 h-8 min-[410px]:ml-2 max=[409px]:w-40 rounded-2xl text-[12px] pl-5 placeholder:text-gray-300 bg-white/30 '
                                />
                            </div>
                           <div className='w-80 h-18 flex flex-col justify-center items-center gap-3'>
                                <p className='text-white text-md font-bold md:mr-50 mr-25'>E-mail</p>
                                <input 
                                    type='text'
                                    name='user_email'
                                    placeholder='Your Email'
                                    required
                                    className='lg:w-70 min-[410px]:w-45 h-8 min-[410px]:ml-2 max=[409px]:w-40 rounded-2xl text-[12px] pl-5 placeholder:text-gray-300 bg-white/30 '
                                />
                            </div>
                        </div>
                        <div className='w-full h-70 mt-5 flex flex-col justify-center items-center'>
                          <div className='w-full h-8 md:ml-15 ml-10 text-white text-md'>
                            Leave us a message
                          </div>
                          <div>
                            <textarea 
                              className='md:w-145 min-[410px]:w-90 max-[409px]:w-80 h-60 rounded-xl bg-white/10 p-3 text-white resize-none'
                              placeholder='Enter your message'
                              name='message'
                              required
                            />
                          </div>
                        </div>
                        <button type='submit' className='w-50 h-8 bg-white rounded-2xl mt-4 md:ml-100 ml-40 max-[409px]:ml-30 max-[409px]:mb-5 cursor-pointer text-black'>
                            Send message
                        </button>
                    </form>
                </div>
            </div>
            <div className='md:w-full max-[409px]:w-90 min-[410px]:w-102 h-30 mt-5 rounded-t-3xl bg-white/10 flex md:flex-row felx-col justify-center items-center'>
                <div className='md:w-full min-[410px]:w-[410px] max-[409px]:w-80 h-15 text-white md:text-2xl text-sm ml-10 mt-3 flex md:flex-row flex-col md:justify-center justify-center items-center md:gap-10 gap-3'>
                    <p className='md:mr-50 mr-5 text-center'>Ajay Kumar</p>
                    <div className='md:w-120 md:h-10 w-100 max-[409px]:w-85 mr-10 h-15 rounded-3xl hover:bg-black/30 text-[15px] bg-black/10 text-white flex flex-row justify-evenly items-center gap-5'>
                        <p className='cursor-pointer' onClick={ScrollToHome}>Home</p>
                        <p  className='cursor-pointer' onClick={scrollToAbout}>About</p>
                        <p  className='cursor-pointer' onClick={scrollToSkills}>Skills</p>
                    </div>
                    <p className='text-[13px] md:ml-50 mr-8 '>official.shivakumar06@gmail.com</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shiva;