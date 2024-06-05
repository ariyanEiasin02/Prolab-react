import React from 'react'
import { FaHeartbeat,FaBluetooth,FaRegFileVideo} from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import WatchThree from '../../assets/w2.png'
const Attractive = () => {
    return (
        <>
            <section className='py-24'>
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Attractive Features</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="md:flex justify-between">
                        <div className="md:w-[30%] md:px-0 px-6">
                            <div className="flex justify-end items-center mt-[50px]">
                                <div className="text-end mr-[30px]">
                                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-2xl text-xl mt-2'>Heart Monitor</h3>
                                    <p className="font-roboto group-hover:text-white font-light text-textprimary md:mt-4 mt-2 text-sm md:text-base">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                </div>
                                <div className="mt-4">
                                    <i className="text-[#8C45A0] text-7xl"><FaHeartbeat/></i>
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-[30px] md:mt-[50px]">
                                <div className="text-end mr-[30px]">
                                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-2xl text-xl mt-2'>Alarm Alert</h3>
                                    <p className="font-roboto group-hover:text-white font-light text-textprimary md:mt-4 mt-2 md:text-base text-sm">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                </div>
                                <div className="mt-4">
                                    <i className="text-[#8C45A0] text-7xl"><IoIosNotificationsOutline/></i>
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-[30px] md:mt-[50px]">
                                <div className="text-end mr-[30px]">
                                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-2xl text-xl mt-2'>Distance Counter</h3>
                                    <p className="font-roboto group-hover:text-white font-light text-textprimary md:mt-4 mt-2 text-sm md:text-base">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                </div>
                                <div className="mt-4">
                                    <i className="text-[#8C45A0] text-7xl"><CiLocationOn/></i>
                                </div>
                            </div>

                        </div>
                        <div className="md:w-[30%] px-6 md:px-0">
                            <div className="mt-[70px]">
                                <img src={WatchThree} alt="" />
                            </div>
                        </div>
                        <div className="md:w-[30%] md:px-0 px-6">
                            <div className="flex justify-end items-center mt-[50px]">
                                <div className="mt-4">
                                    <i className="text-[#8C45A0] text-7xl"><FaBluetooth/></i>
                                </div>
                                <div className="ml-[30px]">
                                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-2xl text-xl mt-2'>Bluetooth</h3>
                                    <p className="font-roboto group-hover:text-white font-light text-textprimary md:mt-4 mt-2 text-sm md:text-base">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-[30px] md:mt-[50px]">
                                <div className="mt-4">
                                    <i className="text-[#8C45A0] text-7xl"><TiWeatherPartlySunny/></i>
                                </div>
                                <div className="ml-[30px]">
                                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-2xl text-xl mt-2'>Weather Update</h3>
                                    <p className="font-roboto group-hover:text-white font-light text-textprimary md:mt-4 mt-2 text-sm md:text-base">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                </div>
                            </div>
                            <div className="flex justify-end items-center mt-[30px] md:mt-[50px]">
                                <div className="mt-4">
                                    <i className="text-[#8C45A0] text-7xl"><FaRegFileVideo /></i>
                                </div>
                                <div className="ml-[30px]">
                                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-2xl text-xl mt-2'>Video Call</h3>
                                    <p className="font-roboto group-hover:text-white font-light text-textprimary md:mt-4 mt-2 text-sm md:text-base">New had happen unable uneasy. Drawings pronounce can be followed improved out.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Attractive