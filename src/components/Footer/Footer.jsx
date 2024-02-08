import React from 'react'

import x1 from './../../assets/logo.png';

import { BiLogoFacebook } from 'react-icons/bi';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BiLogoInstagram } from 'react-icons/bi';

import { Link } from 'react-router-dom';
import { Link as LinkRoll } from 'react-scroll';

const Footer = () => {
  return (
    <>
    <div className='bg-[#F5F5F3]' id='footer'>
        <div className='max-w-container m-auto md:px-16 px-2 mt-[140px] lg:pb-[59px] pb-5'>
            <div className='lg:flex'>
                <div className='pt-[55px]'>
                    <p className='font-sans font-bold text-base text-[#262626]'>MENU</p>            
                    <Link to='/'><p className='font-sans font-normal text-sm text-[#6D6D6D] mt-[17px]'>Home</p></Link>
                    <Link to='/shop'><p className='font-sans font-normal text-sm text-[#6D6D6D] mt-1.5'>Shop</p></Link>
                    <Link to='/about'><p className='font-sans font-normal text-sm text-[#6D6D6D] mt-1.5'>About</p></Link>
                    <LinkRoll smooth spy to = 'footer'><p className='font-sans font-normal text-sm text-[#6D6D6D] mt-1.5 hover:cursor-pointer'>Contact</p></LinkRoll>
                    <Link to='404-1'><p className='font-sans font-normal text-sm text-[#6D6D6D] mt-1.5'>Journal</p></Link>
                </div>
                <div className='mt-[55px] lg:ml-[143px]'>
                    <p className='font-sans font-bold text-base text-[#262626]'>SHOP</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-[17px]'>Category 1</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Category 2</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Category 3</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Category 4</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Category 5</p>
                </div>
                <div className='mt-[55px] lg:ml-[141px]'>
                    <p className='font-sans font-bold text-base text-[#262626]'>HELP</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-[17px]'>Privacy Policy</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Terms & Conditions</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Special E-shop</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Shipping</p>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D] hover:cursor-pointer mt-1.5'>Secure Payments</p>
                </div>
                <div className='mt-[53px] lg:ml-[145px]'>
                    <p className='w-[186px] font-sans font-bold text-base text-[#262626]'>(052) 611-5711 company@domain.com</p>
                    <p className='mt-[15px] font-sans font-normal text-sm text-[#6D6D6D]'>575 Crescent Ave. Quakertown, PA 18951</p>
                </div>
                <div className='mt-[59px] lg:ml-[256px]'>
                  <Link to='/'><img src={x1} alt="" /></Link>
                </div>
            </div>


            <div className='lg:flex justify-between mt-[65px] items-center'>
                <div className='flex gap-x-[26px] lg:pb-0 pb-5'>
                    <BiLogoFacebook className='hover:cursor-pointer'/>
                    <BiLogoLinkedin className='hover:cursor-pointer'/>
                    <BiLogoInstagram className='hover:cursor-pointer'/>
                </div>
                <div>
                    <p className='font-sans font-normal text-sm text-[#6D6D6D]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </div>
        </div>  
    </div>
    </>
  );
};

export default Footer