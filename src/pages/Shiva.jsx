import React from 'react'

const Shiva = () => {
  return (
    <div className='magicpattern'>
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
        
    </div>
  )
}

export default Shiva