import React from 'react'
import { useState } from 'react'

const Newletter = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) =>{
    setInputValue(event.target.value);
  }

  return (
    <div className='my-16'>
      <div className='px-4  flex flex-col md:flex-row md:justify-evenly lg:px-12 lg:mx-auto lg:w-full lg:flex-row lg:justify-between  text-slate-50'>
        <div>
        <h1 className='mb-1 text-xl font-semibold'>Want tips & tricks to optimize your flow?</h1>
        <p className='mb-5'>Sign up to our newsletter and stay up to date.</p>
        <p className='mt-10 text-sm hidden md:block lg:block'>we care about the protection of your data.
            Read our <span className='text-green-300 cursor-pointer underline'>Privacy Policy</span>
          </p>
        </div>

        <div className='flex flex-col md:w-[40%] lg:w-[50%]'>
          <input className='w-full mb-3 h-8 rounded-md
          placeholder:italic placeholder:text-center font-medium text-center text-gray-900 bg-white'
           type="text" placeholder='Enter your email'
           onChange={handleChange}></input>
          <button className="self-center bg-green-400 rounded-md
          px-10 py-2 text-black font-medium">Notify me</button>
          <p className='mt-4 text-sm md:hidden lg:hidden'>we care about the protection of your data.
            Read our <span className='text-green-300 cursor-pointer underline'>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newletter