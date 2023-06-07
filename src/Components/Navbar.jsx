import React from 'react'
import { useState } from 'react'
import {menu, close} from "../Assests"

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () =>{
    setToggle(!toggle);
  }

  return (
    <div className='flex flex-1 font-poppins justify-between items-center
    max-w-[1240px] mt-6 mx-auto px-4'>
      <h1 className='w-full uppercase text-3xl font-bold text-green-400'>React.</h1>
      <ul className='list-none text-slate-50 hidden md:flex'>
          <li className='p-4'>Home</li>
          <li className='p-4'>Company</li>
          <li className='p-4'>Resources</li>
          <li className='p-4'>About</li>
          <li className='p-4'>Contact</li>
      </ul>

      <div className={`${toggle ? "hidden" : "static"} block md:hidden`}>
        <img className="w-[34px] h-[34px] cursor-pointer"
        src={menu} alt="menu"
        onClick={handleClick}/>
      </div>

      <div className={`${toggle ? "" : "hidden"} block md:hidden`}>
        <img className='w-[24px] h-[24px] cursor-pointer'
        src={close} alt="close"
        onClick={handleClick}/>
      </div>

      <div className={` block md:hidden ${toggle ? "fixed top-0 left-0 w-[60%] h-full border-r-4 border-zinc-100 bg-zinc-900 ease-in-out duration-500" : "fixed left-[-100%]"}`}>
      <h1 className='w-full uppercase px-4  pt-6 text-3xl font-bold text-green-400'>React.</h1>
      <ul className='text-slate-50 uppercase
      p-4'>
          <li className='p-4 border-b border-gray-300'>Home</li>
          <li className='p-4 border-b border-gray-300'>Company</li>
          <li className='p-4 border-b border-gray-300'>Resources</li>
          <li className='p-4 border-b border-gray-300'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
      </div>




    </div>
  )
}

export default Navbar