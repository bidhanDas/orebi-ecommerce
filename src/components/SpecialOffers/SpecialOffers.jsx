import React from 'react'

import x1 from './../../assets/so1.jpg';
import x2 from './../../assets/so2.jpg';
import x3 from './../../assets/so3.jpg';
import x4 from './../../assets/so4.jpg';
import t2 from './../../assets/tag2.jpg';
import t3 from './../../assets/tag3.jpg';

import Product from '../../components/Product/Product';

const SpecialOffers = () => {
  return (
    <>
    <div className='max-w-container m-auto px-2.5 lg:mt-32 mt-[100px]'>
        <p className='font-sans font-bold text-[#262626] text-[39px]'>Special Offers</p>
        <div className='lg:mt-12 mt-2.5 lg:flex gap-x-10'>

            <div>
            <Product x={x1} y={t2}></Product>
            </div>

            <div>
            <Product x={x2} y={t3}></Product>
            </div>

            <div>
            <Product x={x3} y={t2}></Product>
            </div>

            <div>
            <Product x={x4} y={t3}></Product>
            </div>

        </div>
    </div>
    </>
  );
};

export default SpecialOffers