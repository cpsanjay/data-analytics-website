import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='font-bold md:text-7xl sm:text-6xl md:py-6 text-4xl'>Grow with data.</h1>
            <div className='flex justify-center py-4'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, flexible financing for</p>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['BTB', "BTC" , 'SASS']} typeSpeed={120} backSpeed={140} loop />
            </div>
            <p className='font-bold text-gray-500 text-xl md:text-2xl'>Monitor your data analytics to increase revenue for BTB, BTC and SASS platforms </p>
            <button className='bg-[#00df9a] w-[200px] font-medium rounded-md mx-auto my-6 py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero;