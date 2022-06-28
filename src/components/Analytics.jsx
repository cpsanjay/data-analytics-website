import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
            <img src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4  ' />
            <div className='flex flex-col'>
                <p className='text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold sm:text-3xl md:text-4xl text-xl'>Manage Data Analytics Centrally</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem dolor sapiente dignissimos distinctio animi voluptas nesciunt accusamus enim eligendi, officia, eos, pariatur aspernatur eaque nulla libero? Maxime, tempora fugit.</p>
                <button className='bg-black w-[200px] font-medium rounded-md mx-auto md:mx-0 my-6 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics