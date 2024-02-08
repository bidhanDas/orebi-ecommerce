import React from 'react'

import { PiNumberTwoBold } from 'react-icons/pi';
import { MdLocalShipping } from 'react-icons/md';
import { RxReload } from 'react-icons/rx';

const Info = () => {
  return (
    <>
      <div className='max-w-container m-auto md:px-16 px-2 lg:mt-20 mt-10'>
        <div className='flex justify-between'>
          <div className='flex items-center lg:gap-x-4 gap-x-2'>
            <PiNumberTwoBold className='text-[#262626] text-2xl lg:text-3xl font-bold'/>
            <p className='font-sans text-[#6D6D6D] text-xs lg:text-base font-normal'>Two years warranty</p>
          </div>

          <div className='flex items-center lg:gap-x-4 gap-x-2'>
            <MdLocalShipping className='text-[#262626] text-2xl lg:text-3xl font-bold'/>
            <p className='font-sans text-[#6D6D6D] text-xs lg:text-base font-normal'>Free shipping</p>
          </div>

          <div className='flex items-center lg:gap-x-4 gap-x-2'>
            <RxReload className='text-[#262626] text-2xl lg:text-3xl font-bold'/>
            <p className='font-sans text-[#6D6D6D] text-xs lg:text-base font-normal'>Return policy in 30 days</p>
          </div>
        </div>
     </div>   
    </>
  )
}

export default Info