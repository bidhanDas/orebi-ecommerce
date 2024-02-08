import React from 'react'

import t1 from './../../assets/new.jpg';
import x1 from './../../assets/bs1.jpg';
import x2 from './../../assets/bs2.jpg';
import x3 from './../../assets/bs3.jpg';
import x4 from './../../assets/bs4.jpg';
import x5 from './../../assets/so5.jpg';
import x6 from './../../assets/so6.jpg';

import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Product from '../../components/Product/Product';



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}

      className='hover:cursor-pointer relative'

      style={{ ...style, display: "block", background: "#979797", position: "absolute", top: "35%", right: "0px", width: "64px", height: "64px", borderRadius: "50%"}}
      onClick={onClick}
    >
      <BsArrowRight className='absolute top-[40%] left-[40%]'/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      // className={className}

      className='hover:cursor-pointer relative'
      style={{ ...style, display: "block", background: "#979797", position: "absolute", top: "35%", left: "0px", width: "64px", height: "64px", borderRadius: "50%", zIndex: "1" }}
      onClick={onClick}
    >
      <BsArrowLeft className='absolute top-[40%] left-[40%]'/>
    </div>
  );
}



const NewArrivals = () => {

  const settings = {
    dots: false, //true
    infinite: true,
    slidesToShow: 4, //3
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,


    //responsive


    responsive: [
      {
        breakpoint: 640, //tailwind breakpoints(Responsive Design), 640 ar niche joto device
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 769, // though md = 768
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1025, // though lg = 1024
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <div className='max-w-container m-auto md:px-16 px-2 lg:mt-32 mt-[25px]'>

      <p className='font-sans font-bold text-[#262626] text-[39px]'>New Arrivals</p>

      <Slider {...settings} className='lg:mt-12 mt-2.5'>
        <div>
        <Product x={x1} y={t1}></Product>
       </div>
       <div>
        <Product x={x2} y={t1}></Product>
       </div>
       <div>
        <Product x={x3} y={t1}></Product>
       </div>
       <div>
        <Product x={x4} y={t1}></Product>
       </div>
       <div>
        <Product x={x5} y={t1}></Product>
       </div>
       <div>
        <Product x={x6} y={t1}></Product>
       </div>
      </Slider>
      
    </div>
    </>

  ); {/* ; WTF*/}
} ; {/* ; WTF*/}

export default NewArrivals