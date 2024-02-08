import React from 'react'

import x1 from './../../assets/ad1.jpg';
import x2 from './../../assets/ad2.jpg';
import x3 from './../../assets/ad3.jpg';
import { Link } from 'react-router-dom';


const Ads = () => {
  return (
    <>
    <div className='max-w-container m-auto md:px-16 px-2 lg:mt-24 mt-[25px] flex gap-x-4 lg:gap-x-10'>
        <div className='w-2/4'>
            <Link to='404'><img src={x1} alt="" /></Link>
        </div>

        <div className='w-2/4'>
            <div>
                <Link to='404'><img src={x2} alt="" /></Link>
            </div>
            <div className='mt-[11px] lg:mt-10'>
                <Link to='404'><img src={x3} alt="" /></Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Ads