import React from 'react'
import {instagram, facebook, twitter, github} from "../Assests"
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto 
    py-16 px-4 grid lg:grid-cols-3 gap-8 text-slate-50'>
      <div>
      <h1 className='w-full uppercase text-3xl font-bold text-green-400'>React.</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis earum facilis minima voluptates eveniet consequatur.</p>
      <div className='flex mt-3 md:w-[75%] my-6'>
        <img className='w-[25px] h-[25px] mr-5' src={facebook} alt="facebook" />
        <img className='w-[25px] h-[25px] mr-5' src={instagram} alt="instagram"/>
        <img className='w-[25px] h-[25px] mr-5' src={twitter} alt="twitter"/>
        <img className='w-[25px] h-[25px]' src={github} alt="github"/>
      </div>
      </div>

      <div className='lg:col-span-2 mt-6 flex justify-between'>
        <div>
          <h6 className='font-medium text-slate-400'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-slate-400'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-slate-400'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>

        <div>
          <h6 className='font-medium text-slate-400'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Terms</li>
            <li className='py-2 text-sm'>Policy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer