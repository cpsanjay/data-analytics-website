import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
            <div className='md:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and Tricks to optimize your flow?</h1>
                <p className='py-3'>Sign up to newsletter and stay upto date.</p>
            </div>
            <div>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md' type="email" placeholder='Enter Email' /> 
                    <button className='bg-[#00df9a] w-[200px] mx-4 font-medium rounded-md mx-auto my-6 py-3 text-black'>Notify Me</button>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span className='text-[#00df9a]'>Sapiente, eos.</span></p>
            </div>
            
        </div>
    </div>
  )
}

export default Newsletter