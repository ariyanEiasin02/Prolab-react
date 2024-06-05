import React from 'react'
import shape from '../../assets/bg-shape.png'
import shapeOne from '../../assets/bg-shape2.png'
import watchOne from '../../assets/w1.png'
import watchTwo from '../../assets/w3.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoCameraReverseOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
const Watch = () => {
    return (
        <>
            <section className='py-36 bg-navbar relative'>
                <img className='absolute top-0 w-full' src={shapeOne} alt="shape" />
                <img className='absolute bottom-0 w-full' src={shape} alt="shape" />
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between items-center">
                        <div className="md:w-2/4 flex justify-center">
                            <img className='animate-watch-pulse w-[350px]' src={watchTwo} alt="" />
                        </div>
                        <div className="md:w-2/4 md:mt-0 mt-[50px] px-6 md:px-0">
                            <h2 className='font-roboto font-bold text-textprimary md:text-5xl text-3xl'>A Watch Can Make Your Life Easy and Fast.</h2>
                            <div className="md:flex justify-between flex-wrap">
                            <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div className="">
                                    <i className="text-[#8C45A0] text-7xl"><IoIosNotificationsOutline/></i>
                                    </div>
                                   <div className="ml-4 md:ml-0">
                                   <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Alarm Counter</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                   </div>
                                </div>
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div>
                                    <i className="text-[#8C45A0] text-7xl"><AiOutlineMessage/></i>
                                    </div>
                                    <div className="ml-4 md:ml-0">
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Live Chat</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                    </div>
                                </div>
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div>
                                    <i className="text-[#8C45A0] text-7xl"><IoCameraReverseOutline/></i>
                                    </div>
                                   <div className="ml-4 md:ml-0">
                                   <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Camera</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                   </div>
                                </div>
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div>
                                    <i className="text-[#8C45A0] text-7xl"><FaWifi/></i>
                                    </div>
                                    <div className="ml-4 md:ml-0">
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Support Wifi</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex mt-[70px] justify-between items-center">
                    <div className="md:w-2/4 md:mt-0 mt-[50px] px-6 md:px-0">
                            <h2 className='font-roboto font-bold text-textprimary md:text-5xl text-3xl'>A Watch Can Make Your Life Easy and Fast.</h2>
                            <div className="md:flex justify-between flex-wrap">
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div className="">
                                    <i className="text-[#8C45A0] text-7xl"><IoIosNotificationsOutline/></i>
                                    </div>
                                   <div className="ml-4 md:ml-0">
                                   <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Alarm Counter</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                   </div>
                                </div>
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div>
                                    <i className="text-[#8C45A0] text-7xl"><AiOutlineMessage/></i>
                                    </div>
                                    <div className="ml-4 md:ml-0">
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Live Chat</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                    </div>
                                </div>
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div>
                                    <i className="text-[#8C45A0] text-7xl"><IoCameraReverseOutline/></i>
                                    </div>
                                   <div className="ml-4 md:ml-0">
                                   <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Camera</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                   </div>
                                </div>
                                <div className="md:w-2/4 mt-[40px] flex flex-row md:flex-col items-center md:items-start">
                                    <div>
                                    <i className="text-[#8C45A0] text-7xl"><FaWifi/></i>
                                    </div>
                                    <div className="ml-4 md:ml-0">
                                    <h3 className='font-roboto font-bold text-textprimary md:text-3xl text-2xl mt-2'>Support Wifi</h3>
                                    <p className="font-roboto font-light text-textprimary w-[90%] text-base mt-2">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/4 flex justify-center">
                            <img className='animate-watch-pulse mt-6 md:mt-0 w-[350px]' src={watchOne} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Watch 