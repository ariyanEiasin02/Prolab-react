import React from 'react'
import shape from '../../assets/bg-shape.png'
import shapeOne from '../../assets/bg-shape2.png'
import personOne from '../../assets/1.jpg'
import personTwo from '../../assets/2.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalf } from 'react-icons/fa'
const Clients = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
    return (
        <div>
            <section className='py-24 bg-navbar relative'>
                <img className='absolute top-0 w-full' src={shapeOne} alt="shape" />
                <img className='absolute bottom-0 w-full' src={shape} alt="shape" />
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Our Clients Say</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="md:mt-[80px] mt-[40px]">
                        <div className="md:flex justify-between gap-x-12">
                            <div className="md:w-1/5">
                               <div className="hidden md:block">
                               <img className='w-16 animate-photo-pulse rounded-full h-16 md:mt-0 mt-20 mx-auto' src={personOne} alt="" />
                                <img className='w-20 animate-photo-pulse rounded-full h-20 md:mt-[40px] mt-0' src={personTwo} alt="" />
                                <img className='w-16 animate-photo-pulse rounded-full h-16 mt-[40px] mx-auto' src={personOne} alt="" />
                               </div>
                               <div className="md:hidden block flex">
                               <img className='w-16 animate-photo-pulse rounded-full h-16 md:mt-0 mt-20 mx-auto' src={personOne} alt="" />
                                <img className='w-20 animate-photo-pulse rounded-full h-20 md:mt-[40px] mt-0' src={personTwo} alt="" />
                                <img className='w-16 animate-photo-pulse rounded-full h-16 md:mt-[40px] mt-20 mx-auto' src={personOne} alt="" />
                               </div>
                            </div>
                                <div className="md:w-3/5 relative shadow-2xl text-center px-12 py-2 bg-white md:py-0 mt-[80px] md:mt-0 rounded-xl">
                                <div className="">
                                    <img className='w-24 absolute top-[0%] left-[50%]  -translate-x-2/4 -translate-y-2/4 rounded-full h-24 border-8 border-primary z-[5]' src={personOne} alt="" />
                                </div>
                                <div className="mt-[80px]">
                                <p className="font-roboto font-light text-textprimary text-base md:w-[87%] mx-auto"> Do play they miss give so up. Words to up style of since world. We leaf to snug on no need. Way own
                                uncommonly travelling now acceptance bed compliment solicitude.</p>
                                <div className="flex mt-2 gap-x-2 justify-center">
                                        <i className="text-[#F9BD22] text-base"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-base"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-base"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-base"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-base"><FaStarHalf /></i>
                                    </div>
                                <h4 className='font-roboto font-bold text-textprimary text-2xl mt-3'>Natha Roy</h4>
                                </div>
                            </div>
                            <div className="md:w-1/5">
                                <div className="md:hidden block flex mt-16 px-10">
                                <img className='w-16 animate-photo-pulse rounded-full h-16' src={personTwo} alt="" />
                                <img className='w-20 animate-photo-pulse rounded-full h-20 mx-auto mt-16  md:mt-[40px]' src={personOne} alt="" />
                                <img className='w-16 animate-photo-pulse rounded-full h-16  md:mt-[40px] mt-0' src={personTwo} alt="" />
                                </div>
                                <div className="hidden md:block">
                                <img className='w-16 ml-14 animate-photo-pulse rounded-full h-16' src={personTwo} alt="" />
                                <img className='w-20 animate-photo-pulse rounded-full h-20 mx-auto ml-36 mt-[40px]' src={personOne} alt="" />
                                <img className='w-16 animate-photo-pulse rounded-full h-16 ml-14  mt-[40px]' src={personTwo} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients