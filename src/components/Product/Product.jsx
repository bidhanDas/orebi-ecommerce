import React from 'react'
import { Link } from 'react-router-dom';

const Product = (props) => {
  return (
    <div>
        <Link to='404'>
        <div className='relative'>
          <img src={props.x} alt="" />
          <img src={props.y} alt="" className='absolute top-[20px] left-[20px]' />              
        </div>

        <div className='flex pt-[24px] items-center'>
          <p className='font-sans font-bold md:text-xl text-[#262626]'>Basic Crew Neck Tee</p>
          <p className='font-sans font-normal md:text-base text-[#767676] ml-[113px]'>$44.00</p>
        </div>

        <p className='font-sans font-normal md:text-base text-[#767676] mt-[15px]'>Black</p>
        </Link>
    </div>
  )
}

export default Product