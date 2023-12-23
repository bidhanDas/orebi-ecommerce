import React from 'react'

import x1 from './../../assets/new1.jpg';
import x2 from './../../assets/new2.jpg';
import x3 from './../../assets/new3.jpg';
import x4 from './../../assets/new4.jpg';

import Product from '../../components/Product/Product';

const Bestsellers = () => {
  return (
    <>
    <div className='max-w-container m-auto px-2.5 lg:mt-32 mt-[25px]'>

        <p className='font-sans font-bold text-[#262626] text-[39px]'>Our Bestsellers</p>

        <div className='lg:mt-12 mt-2.5 lg:flex gap-x-10'>

            <div>
            <Product x={x1}></Product>
            </div>

            <div>
            <Product x={x2}></Product>
            </div>

            <div>
            <Product x={x3}></Product>
            </div>

            <div>
            <Product x={x4}></Product>
            </div>

        </div>
    </div>
    </>
  ); {/* ; WTF*/}
}; {/* ; WTF*/}

export default Bestsellers