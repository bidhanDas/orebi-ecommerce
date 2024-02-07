import React from 'react'

import x1 from './../../assets/logo.png';

import { Link, useLocation } from 'react-router-dom';

import { Link as LinkRoll } from 'react-scroll'; //as 2ta Link

const Navbar = () => {

  const x = useLocation();
  const y = x.pathname;

  return (
    <>
    <nav className='max-w-container m-auto py-8 sm:px-16 px-2.5'>
   
      <div className='flex'>
          
        <div className='w-3/12'>
          <Link to='/'><img src={x1} alt="" /></Link>
        </div>

        <div className='w-9/12'>            
          <ul className='flex justify-end sm:gap-x-10 gap-x-2.5'>
            <Link to='/'> <li className={y==='/' ? "font-sans font-bold text-sm text-[#262626]" : "font-sans font-normal hover:font-bold text-sm text-[#767676] hover:text-[#262626]        duration-300 ease-in-out"}>Home</li> </Link> {/* no need hover:cursor-pointer as Link*/}
            <Link to='/shop'><li className={y==='/shop' ? "font-sans font-bold text-sm text-[#262626]" : "font-sans font-normal hover:scale-105 text-sm text-[#767676] hover:text-[#262626]     duration-300 ease-in-out"}>Shop</li></Link>
            <Link to='/about'><li className={y==='/about' ? "font-sans font-bold text-sm text-[#262626]" : "font-sans font-normal hover:font-bold text-sm text-[#767676] hover:text-[#262626]     duration-300 ease-in-out"}>About</li></Link>
            <LinkRoll smooth spy to = 'footer'><li className='font-sans font-normal hover:font-bold text-sm text-[#767676] hover:text-[#262626] hover:cursor-pointer duration-300 ease-in-out'>Contacts</li></LinkRoll> {/* not in LinkRoll(name like x)*/}
            <Link to='404'><li className={y==='/about/404' ? "font-sans font-bold text-sm text-[#262626]" : "font-sans font-normal hover:font-bold text-sm text-[#767676] hover:text-[#262626]     duration-300 ease-in-out"}>Journal</li></Link>
          </ul>          
        </div>

      </div>

    </nav>
    </>
  )
}

export default Navbar