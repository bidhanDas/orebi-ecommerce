import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Product from '../../components/Product/Product';

import t1 from './../../assets/new.jpg';
import t2 from './../../assets/tag2.jpg';
import t3 from './../../assets/tag3.jpg';

import x1 from './../../assets/bs1.jpg';
import x2 from './../../assets/bs2.jpg';
import x3 from './../../assets/bs3.jpg';
import x4 from './../../assets/bs4.jpg';
import x5 from './../../assets/new1.jpg';
import x6 from './../../assets/new2.jpg';
import x7 from './../../assets/new3.jpg';
import x8 from './../../assets/new4.jpg';
import x9 from './../../assets/so1.jpg';
import x10 from './../../assets/so2.jpg';
import x11 from './../../assets/so3.jpg';
import x12 from './../../assets/so4.jpg';
import x13 from './../../assets/so5.jpg';
import x14 from './../../assets/so6.jpg';

const Shop = () => {
  return (
    <>
    <Navbar></Navbar>
    <Header></Header>

    <div className='max-w-container m-auto sm:px-16 px-2'>
        <p className='font-sans font-bold text-[49px] text-[#262626] mt-[124px]'>Shop</p>
        <p className='font-sans font-normal text-xs text-[#767676]'>Home  >  Shop</p>

        <div className='2xl:w-[1190px] m-auto mt-[146px]'>
          <div className='lg:flex gap-x-10'>
            <Product x={x1} y={t1}></Product>
            <Product x={x2} y={t2}></Product>
            <Product x={x3}></Product>
          </div>

          <div className='lg:flex gap-x-10'>
            <Product x={x4}></Product>
            <Product x={x5} y={t1}></Product>
            <Product x={x6}></Product>
          </div>

          <div className='lg:flex gap-x-10'>
            <Product x={x7} y={t2}></Product>
            <Product x={x8} y={t3}></Product>
            <Product x={x9} y={t2}></Product>
          </div>

          <div className='lg:flex gap-x-10'>
            <Product x={x10}></Product>
            <Product x={x11}></Product>
            <Product x={x12}></Product>
          </div>

          <div className='lg:flex gap-x-10'>
            <Product x={x13} y={t3}></Product>
            <Product x={x14} y={t2}></Product>
          </div>
        </div>
    </div>

    <Footer></Footer>

    </>
  );
};

export default Shop