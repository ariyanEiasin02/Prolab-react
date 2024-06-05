import React from 'react'
import watchOne from '../../assets/w1.png'
import watchTwo from '../../assets/w3.png'
import watchThree from '../../assets/w2.png'
import watchFour from '../../assets/w4.png'
import { FaStar, FaStarHalf } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Product = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <section className='py-24 relative'>
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Our Awesome Products</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div >
                        <Slider {...settings} className="w-full md:flex gap-x-4 justify-between mt-[50px]">
                            <div className="md:w-[23%] w-full group">
                                <div className="bg-[#ecd2e6] py-6 px-6 mx-0 md:mx-2 relative">
                                    <img src={watchOne} alt="" />
                                    <div className="bg-[rgba(0,0,0,0.6)] absolute bottom-0 left-0 w-full h-o group-hover:h-full opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <div className="">
                                            <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F2F6FC] py-6 px-6 mx-0 md:mx-2 text-center">
                                    <div className="flex mt-2 gap-x-2 justify-center">
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStarHalf /></i>
                                    </div>
                                    <p className="font-roboto bold text-primary text-4xl mt-3">$130<span className="text-textprimary relative text-xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$193</span></p>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-2xl text-2xl mt-3'>Prolab Blue</h3>
                                </div>
                            </div>
                            <div className="md:w-[23%] w-full group">
                                <div className="bg-[#ecd2e6] py-6 px-6 mx-0 md:mx-2 relative">
                                    <img src={watchThree} alt="" />
                                    <div className="bg-[rgba(0,0,0,0.6)] absolute bottom-0 left-0 w-full h-o group-hover:h-full opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <div className="">
                                            <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F2F6FC] py-6 px-6 mx-0 md:mx-2 text-center">
                                    <div className="flex mt-2 gap-x-2 justify-center">
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStarHalf /></i>
                                    </div>
                                    <p className="font-roboto bold text-primary text-4xl mt-3">$130<span className="text-textprimary relative text-xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$193</span></p>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-2xl text-2xl mt-3'>Prolab Black</h3>
                                </div>
                            </div>
                            <div className="md:w-[23%] w-full group">
                                <div className="bg-[#ecd2e6] py-6 px-6 mx-0 md:mx-2 relative">
                                    <img src={watchTwo} alt="" />
                                    <div className="bg-[rgba(0,0,0,0.6)] absolute bottom-0 left-0 w-full h-o group-hover:h-full opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <div className="">
                                            <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F2F6FC] py-6 px-6 mx-0 md:mx-2 text-center">
                                    <div className="flex mt-2 gap-x-2 justify-center">
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStarHalf /></i>
                                    </div>
                                    <p className="font-roboto bold text-primary text-4xl mt-3">$130<span className="text-textprimary relative text-xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$193</span></p>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-2xl text-2xl mt-3'>Prolab Gray</h3>
                                </div>
                            </div>
                            <div className="md:w-[23%] w-full group">
                                <div className="bg-[#ecd2e6] py-6 px-6 mx-0 md:mx-2 relative">
                                    <img src={watchFour} alt="" />
                                    <div className="bg-[rgba(0,0,0,0.6)] absolute bottom-0 left-0 w-full h-o group-hover:h-full opacity-0 group-hover:opacity-100 flex justify-center items-center">
                                        <div className="">
                                            <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-8 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-[#F2F6FC] py-6 px-6 mx-0 md:mx-2 text-center">
                                    <div className="flex mt-2 gap-x-2 justify-center">
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStar /></i>
                                        <i className="text-[#56EB00] text-base"><FaStarHalf /></i>
                                    </div>
                                    <p className="font-roboto bold text-primary text-4xl mt-3">$130<span className="text-textprimary relative text-xl after:content-[''] after:w-full after:h-[2px] after:bg-textprimary after:top-3 after:left-0 after:absolute">$193</span></p>
                                    <h3 className='font-roboto font-bold text-textprimary md:text-2xl text-2xl mt-3'>Prolab White</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Product