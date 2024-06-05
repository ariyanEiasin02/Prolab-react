import React from 'react'
import shape from '../../assets/bg-shape.png'
import shapeOne from '../../assets/bg-shape2.png'
import { FaPlay,FaGalacticRepublic,FaHeadset } from "react-icons/fa";
import { MdOutlineShoppingCart,MdOutlineRefresh } from "react-icons/md";
const Choose = () => {
    return (
        <div>
            <section className='py-24 bg-navbar relative'>
                <img className='absolute top-0 w-full' src={shapeOne} alt="shape" />
                <img className='absolute bottom-0 w-full' src={shape} alt="shape" />
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Why Choose Us</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="md:flex justify-between gap-x-8 mt-[50px]">
                        <div className="md:w-2/4">
                            <div className="bg-pattern relative bg-no-repeat bg-center bg-cover md:py-64 py-36 rounded-xl">
                                <div className="bg-acces flex justify-center items-center rounded-xl absolute top-0 left-0 w-full h-full">
                                    <div className="bg-white after: flex justify-center items-center w-14 h-14 rounded-full z-[3]">
                                    <i className="text-primary text-xl"><FaPlay/></i>
                                    </div>
                                    <div className="animate-shadow-border w-16 h-16 bg-whitergba rounded-full absolute top-[50%] left-[50%] z-[1] -translate-y-2/4 -translate-x-2/4"></div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/4">
                            <div className="md:flex flex-wrap justify-between items-center gap-x-6">
                                <div className="md:w-[47%] text-center bg-primary py-16 px-12 rounded-xl shadow-2xl md:mt-0 mt-[22px]">
                                    <div className="flex justify-center relative">
                                        <i className='text-white text-5xl'><FaGalacticRepublic /></i>
                                        <div className="w-[90px] h-[90px] border-2 border-white rounded-full animate-border-play border-dotted absolute top-[-20px] left-[45px]duration-300"></div>
                                    </div>
                                    <h3 className="font-roboto font-bold text-white text-xl mt-8">1 Year Guarantee</h3>
                                </div>
                                <div className="md:w-[47%] md:mt-0 mt-[22px] md:translate-y-4 translate-y-0  text-center bg-white py-16 px-12 rounded-xl shadow-2xl">
                                    <div className="flex justify-center relative">
                                        <i className='text-[#5721D4] text-5xl'><MdOutlineShoppingCart /></i>
                                        <div className="w-[90px] h-[90px] border-2 border-[#D43F8D] rounded-full animate-border-play border-dotted absolute top-[-20px] left-[45px]duration-300"></div>
                                    </div>
                                    <h3 className="font-roboto font-bold text-textprimary text-xl mt-8">Free Shipping</h3>
                                </div>
                                <div className="md:w-[47%] mt-[22px] bg-white text-center py-16 px-12 rounded-xl shadow-2xl">
                                    <div className="flex justify-center relative">
                                        <i className='text-[#5721D4] text-5xl'><MdOutlineRefresh  /></i>
                                        <div className="w-[90px] h-[90px] border-2 border-blue-500 rounded-full animate-border-play border-dotted absolute top-[-20px] left-[45px]duration-300"></div>
                                    </div>
                                    <h3 className="font-roboto font-bold text-textprimary text-xl mt-8">Product Return</h3>
                                </div>
                                <div className="md:w-[47%] translate-y-0 md:translate-y-4 mt-[22px] bg-[#D43F8D] text-center py-16 px-12 rounded-xl shadow-2xl">
                                    <div className="flex justify-center relative">
                                        <i className='text-white text-5xl'><FaHeadset  /></i>
                                        <div className="w-[90px] h-[90px] border-2 border-blue rounded-full animate-border-play border-dotted absolute top-[-20px] left-[45px]duration-300"></div>
                                    </div>
                                    <h3 className="font-roboto font-bold text-white text-xl mt-8">24/7 Support</h3>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Choose