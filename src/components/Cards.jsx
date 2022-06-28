import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full bg-white py-[10px] px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[3rem]' src={Single} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='font-bold text-center text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 mx-8 border-b mt-8'>500GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted User</p>
                    <p className='py-2 mx-8 border-b'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium rounded-md mx-auto my-6 py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[3rem]' src={Double} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='font-bold text-center text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 mx-8 border-b mt-8'>500GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted User</p>
                    <p className='py-2 mx-8 border-b'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium rounded-md mx-auto my-6 py-3 text-black'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[3rem]' src={Triple} alt="single" />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='font-bold text-center text-4xl'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 mx-8 border-b mt-8'>500GB Storage</p>
                    <p className='py-2 mx-8 border-b'>1 Granted User</p>
                    <p className='py-2 mx-8 border-b'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] font-medium rounded-md mx-auto my-6 py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards