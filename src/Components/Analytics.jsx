import React from 'react'
import {laptop} from '../Assests';
const Analytics = () => {
  return (
    <div className='mt-[100px]'>
      <div className='flex  flex-col justify-betwen md:flex-row md:justify-evenly items-center
      bg-white py-[50px]'>
        <div className='w-[70%] md:w-[30%]'>
        <img src={laptop} alt="laptop"></img>
        </div>
        <div className='w-[80%] flex flex-col items-start mt-[100px] md:mt-0 md:w-[50%] '>
          <p className='text-green-400 font-semibold'>Data Analytics Dashboard</p>
          <h1 className="text-2xl my-2 font-bold">Manage Data Analytics Centrally</h1>
          <p className=''>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam quis reprehenderit quos qui tenetur, quia soluta necessitatibus voluptatibus nemo
          </p>
          <button className='bg-gray-900 self-center md:self-start rounded-md
          px-4 py-2 text-slate-50
          mt-6'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics