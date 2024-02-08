import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header'

import x1 from './../../assets/404.png';

import Footer from '../../components/Footer/Footer';

const NotFound = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <div className='max-w-container m-auto sm:px-16 px-8'>
        <img src={x1} alt="" className='mt-24' />
        <p className='font-sans font-normal text-base text-[#767676] md:w-[644px] mt-12'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it.</p>
      </div>

      <Footer></Footer>

    </div>
  )
}

export default NotFound