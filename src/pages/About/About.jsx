import React from 'react'

import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

import x1 from './../../assets/about1.jpg';
import x2 from './../../assets/about2.jpg';
import x3 from './../../assets/about3.png';
import x4 from './../../assets/about4.png';
import x5 from './../../assets/about5.png';

import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Header></Header>

        <div className='max-w-container m-auto sm:px-16 px-2'>
            <p className='font-sans font-bold text-[49px] text-[#262626] mt-[124px]'>About</p>
            <p className='font-sans font-normal text-xs text-[#767676]'>Home  >  About</p>

            <div className='flex mt-[136px] gap-x-10'>
                <Link to='404'><img src={x1} alt="" /></Link>
                <Link to='404'><img src={x2} alt="" /></Link>
            </div>

            <p className='font-sans font-normal text-[39px] text-[#262626] mt-[32px] '>Orebi is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>

            <div className='mt-[118px] 2xl:flex'>
                <img src={x3} alt="" className='hover:border-b-2 border-black hover:cursor-pointer w-[470px]'/>
                <img src={x4} alt="" className='hover:border-b-2 border-black hover:cursor-pointer w-[470px]'/>
                <img src={x5} alt="" className='hover:border-b-2 border-black hover:cursor-pointer w-[470px]'/>
            </div>
        </div>

        <Footer></Footer>
    </div>
  )
}

export default About