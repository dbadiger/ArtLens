import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {
  return (
    <div className='pb-16 text-center'>
      <h1 className='text-2xl mb:text-3xl lg"text-4xl mt-4 font-semibold text-neutral-800 py-6'>Generate Your Image Now</h1>
      <button className='bg-black text-white rounded-full inline-flex px-12 py-3 m-auto items-center
      hover:scale-105 transition-all duration-500 gap-2
      '>Generate Image
        <img src={assets.star_group} alt="" className='h-6'/>
      </button>
    </div>
  )
}

export default GenerateBtn
