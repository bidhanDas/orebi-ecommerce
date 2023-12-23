import React, { useState } from 'react'

import x1 from './../../assets/image1.jpg';

import { AiOutlineSearch } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Header = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [show2, setShow2] = useState(false);
  const handleClick2 = () => {
    setShow2(!show2);
  };

  const [show3, setShow3] = useState(false);
  const handleClick3 = () => {
    setShow3(!show3);
  };


  return (
    <>
    <div className='bg-[#F5F5F3]'>

      <div className='max-w-container m-auto px-2.5 flex justify-between items-center'>
      
       <div onClick={handleClick}>
          <p className='flex items-center gap-x-2.5 hover:cursor-pointer my-10'>

            <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z" fill="#262626"/>
            <path d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z" fill="#262626"/>
            </svg>

            <span className='font-sans font-normal text-sm text-[#262626]     hidden md:block'>Shop by Category</span>

          </p>

          {
            show &&
            <ul className='bg-[#262626] absolute w-[263px] z-[1] lg:top-[180px] top-[156px]'>
              <li className='font-sans font-normal text-sm text-[#BEBEBE] my-4 ml-[21px]  hover:text-white hover:ml-[31px] hover:cursor-pointer hover:font-bold duration-300 ease-in-out'>Accesories</li>
              <li className='font-sans font-normal text-sm text-[#BEBEBE] my-4 ml-[21px]  hover:text-white hover:ml-[31px] hover:cursor-pointer hover:font-bold duration-300 ease-in-out'>Furniture</li>
              <li className='font-sans font-normal text-sm text-[#BEBEBE] my-4 ml-[21px]  hover:text-white hover:ml-[31px] hover:cursor-pointer hover:font-bold duration-300 ease-in-out'>Electronics</li>
              <li className='font-sans font-normal text-sm text-[#BEBEBE] my-4 ml-[21px]  hover:text-white hover:ml-[31px] hover:cursor-pointer hover:font-bold duration-300 ease-in-out'>Clothes</li>
              <li className='font-sans font-normal text-sm text-[#BEBEBE] my-4 ml-[21px]  hover:text-white hover:ml-[31px] hover:cursor-pointer hover:font-bold duration-300 ease-in-out'>Bags</li>
              <li className='font-sans font-normal text-sm text-[#BEBEBE] my-4 ml-[21px]  hover:text-white hover:ml-[31px] hover:cursor-pointer hover:font-bold duration-300 ease-in-out'>Home appliances</li>
            </ul>
          }
       </div>


       <div className='relative my-[25px]'>
          <input type="text" className='lg:w-[601px] lg:py-3 pl-[21px]' placeholder='Search Products'/>
          <AiOutlineSearch className='absolute lg:top-[14px] top-[0.5px] lg:right-[20px] right-[0px] text-2xl hover:cursor-pointer'/>
       </div>

       

       <div className='flex gap-x-10 my-10'>
         <div onClick={handleClick2} className='hover:cursor-pointer'>
            <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5953 3.85284C10.5953 5.98094 8.87057 7.70569 6.74248 7.70569C4.61438 7.70569 2.88963 5.98094 2.88963 3.85284C2.88963 1.72475 4.61438 0 6.74248 0C8.87057 0 10.5953 1.72475 10.5953 3.85284ZM8.93679 8.6689H9.43946C11.6729 8.6689 13.485 10.4809 13.485 12.7144V13.9666C13.485 14.7642 12.8378 15.4114 12.0401 15.4114H1.44482C0.647157 15.4114 0 14.7642 0 13.9666V12.7144C0 10.4809 1.81204 8.6689 4.04549 8.6689H4.54816C5.2194 8.97592 5.95987 9.1505 6.74248 9.1505C7.52508 9.1505 8.26856 8.97592 8.93679 8.6689Z" fill="#262626"/>
            <path d="M24.6056 6H32.3944C32.9333 6 33.2027 6.63741 32.8213 7.01097L28.9283 10.8266C28.6922 11.0578 28.3078 11.0578 28.0717 10.8266L24.1787 7.01097C23.7973 6.63741 24.0667 6 24.6056 6Z" fill="#262626"/>
            </svg>

            {
              show2==true &&

              <ul className='absolute w-[200px] bg-white ml-[-165px] mt-4 z-[1]'>
                <li className='font-sans font-normal text-sm text-[#262626] py-4  text-center hover:bg-[#2B2B2B] hover:text-white hover:cursor-pointer hover:font-bold duration-500 ease-in-out'>My Account</li>
                <li className='font-sans font-normal text-sm text-[#262626] py-4  text-center hover:bg-[#2B2B2B] hover:text-white hover:cursor-pointer hover:font-bold duration-500 ease-in-out'>Log Out</li>
              </ul>
            }
         </div>

         <div onClick={handleClick3} className='hover:cursor-pointer'>        
            <FaShoppingCart/>

            {
              show3==true &&

              <div className='absolute ml-[-342px] mt-4 z-[1]'> {/* width (no need) */}


                <div className='bg-[#F5F5F3] py-5 px-5 flex items-center'>
                  <div>
                    <img src={x1} alt="" />
                  </div>

                  <div className='pl-5 font-sans text-[#262626] text-sm font-bold'>
                    <p>Black Smart Watch</p>
                    <p className='pt-3'>$44.00</p>
                  </div>

                  <div className='ml-[65px]'>
                    <ImCross/>
                  </div>
                </div>

                <div className='py-5 px-5 bg-white'>
                  <p className='font-sans text-[#767676] text-base font-normal'>Subtotal: <span className='font-sans text-[#262626] text-base font-bold'>$44.00</span></p>
                  <div className='flex pt-3 gap-x-[21px]'>
                    <div className='font-sans font-bold text-sm text-[#262626] py-4 px-10 border-2 border-black hover:bg-[#262626] hover:text-white hover:cursor-pointer duration-500 ease-in-out'>
                      <p>View Cart</p>
                    </div>
                    <div className='font-sans font-bold text-sm text-[#262626] py-4 px-10 border-2 border-black hover:bg-[#262626] hover:text-white hover:cursor-pointer duration-500 ease-in-out'>
                      <p>Checkout</p>
                    </div>
                  </div>
                </div>


              </div>
            }
         </div>
       </div>

      </div>

    </div>
    </>
  )
}

export default Header