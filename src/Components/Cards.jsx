import React from 'react'
import {single, double, triple} from '../Assests';

const Cards = () => {

    return(
      <div className='bg-white w-full flex flex-col
        items-center p-10 lg:flex-row lg:justify-evenly'>
        <div className='w-[350px] h-[437px] lg:w-[30%] lg:h-[30%] lg:mt-10
          bg-slate-50 rounded-md shadow-gray-400 shadow-xl
          hover:scale-105 hover:bg-'>
        <div className=' p-5 font-poppins w-full h-full flex flex-col 
        justify-center items-center'>
          <img className="w-[40%] h-auto relative left-5 p-4 " src={single} alt="single"/>
          <h2 className='text-xl font-semibold'>Single User</h2>
          <h1 className='text-4xl font-semibold my-2'>$149</h1>
          <ul className='list-none py-2 w-[80%] font-lg'>
            <li className='p-2 border-b-2 border-t-2 w-full text-center'> 500 GB Storage</li>
            <li className='p-2 border-b-2 w-full text-center'> 1 User Allowed</li>
            <li className='p-2 w-full text-center'> Send up to 2 GB</li>
          </ul>
          <button className='bg-green-400 text-black
          px-10 py-1  mt-2 rounded  hover:bg-slate-800
          hover:text-green-300'>Start Trail</button>
        </div>
        </div>
        
        <div className='w-[350px] h-[437px] lg:w-[30%] lg:h-[30%] mt-10
          bg-slate-50 rounded-md shadow-gray-400 shadow-xl
          hover:scale-105'>
        <div className=' p-5 font-poppins w-full h-full flex flex-col 
        justify-center items-center'>
          <img className="w-[40%] h-auto relative p-4 " src={double} alt="double"/>
          <h2 className='text-xl font-semibold'>Partnership</h2>
          <h1 className='text-4xl font-semibold my-2'>$199</h1>
          <ul className='list-none py-2 w-[80%] font-lg'>
            <li className='p-2 border-b-2 border-t-2 w-full text-center'> 1 TB Storage</li>
            <li className='p-2 border-b-2 w-full text-center'> 3 User Allowed</li>
            <li className='p-2 w-full text-center'> Send up to 10 GB</li>
          </ul>
          <button className='bg-green-400 text-black
          px-10 py-1  mt-2 rounded  hover:bg-slate-800
          hover:text-green-300'>Start Trail</button>
        </div>
        </div>

        <div className='w-[350px] h-[437px] lg:w-[30%] lg:h-[30%] mt-10
          bg-slate-50 rounded-md shadow-gray-400 shadow-xl
          hover:scale-105'>
        <div className=' p-5 font-poppins w-full h-full flex flex-col 
        justify-center items-center'>
          <img className="w-[40%] h-auto p-4 " src={triple} alt="triple"/>
          <h2 className='text-xl font-semibold'>Group Account</h2>
          <h1 className='text-4xl font-semibold my-2'>$299</h1>
          <ul className='list-none py-2 w-[80%] font-lg'>
            <li className='p-2 border-b-2 border-t-2 w-full text-center'> 5 TB Storage</li>
            <li className='p-2 border-b-2 w-full text-center'> 10 User Allowed</li>
            <li className='p-2 w-full text-center'> Send up to 20 GB</li>
          </ul>
          <button className='bg-green-400 text-black
          px-10 py-1  mt-2 rounded hover:bg-slate-800
          hover:text-green-300'>Start Trail</button>
        </div>
        </div>

      </div>
    )
}

export default Cards