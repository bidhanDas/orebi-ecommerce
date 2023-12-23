import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import x1 from './../../assets/banner1.jpg';
import x2 from './../../assets/banner2.png';
import x3 from './../../assets/banner3.png';
import { Link } from 'react-router-dom';

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <>
    <Slider {...settings}>
      <div className='relative'>
        <img src={x1} alt=""/>
        <div className='hidden 2xl:block'><img src={x2} alt="" className='absolute top-[167px] left-[293px] w-[245px]' /></div>
        <div className='hidden 2xl:block'><img src={x3} alt="" className='absolute top-[264px] left-[295px] w-[338px]' /></div>
        <Link to='404'><div className='hidden 2xl:block'><button className='bg-[#262626] font-sans font-bold text-white text-sm absolute top-[365px] left-[296px] py-4 px-[58px]'>Shop Now</button></div></Link>
      </div>

      <div>
        <img src={x1} alt="" />
      </div>
    </Slider>
    </>
  )
}

export default Banner