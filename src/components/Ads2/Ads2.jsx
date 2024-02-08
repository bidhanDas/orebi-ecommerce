import React from 'react'

import x1 from './../../assets/ad4.jpg';
import { Link } from 'react-router-dom';

const Ads2 = () => {
  return (
    <>
    {/* image boro hobe na  */}
    <div className='max-w-container m-auto md:px-16 px-2 lg:mt-32 mt-[100px]'>
        <Link to='404'><img src={x1} alt="" /></Link>
    </div>
    </>
  );
};

export default Ads2