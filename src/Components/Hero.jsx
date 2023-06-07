import React from 'react'

const Hero = () => {
  const names = ["SaaS", "D2C","BTB"];

  return (
    <div className='mt-36 font-poppins mx-auto max-w-[800px]'>
      <div className='flex flex-col items-center text-slate-50'>
        <p className='uppercase text-md
         text-green-300 font-semibold
         '>Growing with data analytics
        </p>

        <h1 className=' text-4xl p-4 sm:text-6xl font-bold sm:p-6'>Grow with data.
        </h1>

        <h2 className='font-semibold  sm:text-4xl'>Fast & flexible financing
        </h2>

        <div className='text-sm sm:text-md flex flex-col items-center p-3'> 
          <p className='font-semibold text-center text-gray-500'>Monitor your data analytics to increase revenue
            for BTS, BTC & SASS <br className='hidden sm:block'/>
            <span>platform</span>
          </p>
        </div>
        <button className='bg-green-300 rounded-md px-4 py-2
         text-black font-medium
         hover:border-2 hover:border-white'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero