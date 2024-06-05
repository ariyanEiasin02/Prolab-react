import React, { useState, useEffect } from 'react';
import shape from '../../assets/bg-shape.png'
import shapeOne from '../../assets/bg-shape2.png'
import watchOne from '../../assets/w1.png'
import watchTwo from '../../assets/w3.png'
import watchThree from '../../assets/w2.png'
import CountUp from "react-countup";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Deal = () => {
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
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Deal Of The Week</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                       <Slider {...settings} className="md:w-[80%] mt-[50px] mx-auto shadow-2xl rounded-xl">
                       <div className="w-full mx-auto py-12 md:px-16 px-8">
                            <div className="md:flex justify-between">
                                <div className="md:w-2/4">
                                    <img className='w-[350px]' src={watchOne} alt="" />
                                </div>
                                <div className="md:w-2/4 w-full">
                                    <div className="flex gap-x-2 mt-6 md:mt-0">
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                    </div>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-4'>Smart Watch (blue)</h3>
                                    <p className="font-roboto font-light text-textprimary text-base mt-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!
                                    </p>
                                    <p className="font-roboto bold text-primary text-4xl mt-6">$99 <span className="text-textprimary relative text-2xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$250</span></p>
                                    <div className="mt-[30px]">
                                        <div className="flex justify-between">
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={100} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Days</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={200} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Hrs</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={400} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Min</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={900} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12">
                                        <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="w-full mx-auto py-12 md:px-16 px-8">
                            <div className="md:flex justify-between">
                                <div className="md:w-2/4">
                                    <img className='w-[350px]' src={watchTwo} alt="" />
                                </div>
                                <div className="md:w-2/4">
                                    <div className="flex mt-6 md:mt-0 gap-x-2">
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                    </div>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-4'> Smart Watch (gray)</h3>
                                    <p className="font-roboto font-light text-textprimary text-base mt-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!
                                    </p>
                                    <p className="font-roboto bold text-primary text-4xl mt-6">$99 <span className="text-textprimary relative text-2xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$250</span></p>
                                    <div className="mt-[30px]">
                                        <div className="flex justify-between">
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={100} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Days</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={200} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Hrs</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={400} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Min</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={900} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12">
                                        <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       <div className="w-full mx-auto py-12 md:px-16 px-8">
                            <div className="md:flex justify-between">
                                <div className="md:w-2/4">
                                    <img className='w-[350px]' src={watchThree} alt="" />
                                </div>
                                <div className="md:w-2/4">
                                    <div className="flex mt-6 md:mt-0 gap-x-2">
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                        <i className="text-[#F9BD22] text-xl"><FaStar /></i>
                                    </div>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-4'> Smart Watch (Black)</h3>
                                    <p className="font-roboto font-light text-textprimary text-base mt-4">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam illo reiciendis saepe molestias veritatis!
                                    </p>
                                    <p className="font-roboto bold text-primary text-4xl mt-6">$99 <span className="text-textprimary relative text-2xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$250</span></p>
                                    <div className="mt-[30px]">
                                        <div className="flex justify-between">
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={100} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Days</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={200} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Hrs</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={400} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Min</p>
                                            </div>
                                            <div className="py-4 px-3 rounded-xl border border-textprimary shadow-2xl">
                                                <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl'><CountUp start={0} end={900} duration={10}/></h3>
                                                <p className="font-roboto font-light text-textprimary text-base">Sec</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-12">
                                        <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       </Slider>
                </div>
            </section>
        </div>
    )
}

export default Deal 