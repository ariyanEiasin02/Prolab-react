import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { FcPhoneAndroid } from "react-icons/fc";
import { RiGpsLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlineLinkedCamera } from "react-icons/md";
const Prolab = () => {
  return (
   <>
    <section className='py-16'>
        <div className="max-w-container mx-auto">
            <div className="text-center px-6 md:px-6">
                <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Why Prolab Is Best</h2>
                <p className="font-roboto font-light text-textprimary text-base md:w-[61%] w-full mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
            </div>
            <div className="md:flex justify-between flex-wrap mt-[30px]">
                <div className="md:w-[32%] mt-[50px] relative group shadow-2xl rounded-xl py-8 px-8 text-center hover:-translate-y-6 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 ">
                    <div className="flex justify-center">
                    <i className="text-primary group-hover:text-white text-7xl mx-auto"><VscGraph/></i>
                    </div>
                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-3xl text-2xl mt-2'>Interactive Design</h3>
                    <p className="font-roboto group-hover:text-white font-light text-textprimary text-base mt-6">Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.</p>
                </div>
                <div className="md:w-[32%] mt-[50px] relative group shadow-2xl rounded-xl py-8 px-8 text-center hover:-translate-y-6 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 ">
                    <div className="flex justify-center">
                    <i className="text-primary group-hover:text-white text-7xl mx-auto"><FcPhoneAndroid/></i>
                    </div>
                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-3xl text-2xl mt-2'>Install Apps</h3>
                    <p className="font-roboto group-hover:text-white font-light text-textprimary text-base mt-6">Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.</p>
                </div>
                <div className="md:w-[32%] mt-[50px] relative group shadow-2xl rounded-xl py-8 px-8 text-center hover:-translate-y-6 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 ">
                    <div className="flex justify-center">
                    <i className="text-primary group-hover:text-white text-7xl mx-auto"><RiGpsLine/></i>
                    </div>
                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-3xl text-2xl mt-2'>GPS Tracking</h3>
                    <p className="font-roboto group-hover:text-white font-light text-textprimary text-base mt-6">Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.</p>
                </div>
                <div className="md:w-[32%] mt-[50px] relative group shadow-2xl rounded-xl py-8 px-8 text-center hover:-translate-y-6 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 ">
                    <div className="flex justify-center">
                    <i className="text-primary group-hover:text-white text-7xl mx-auto"><AiOutlineMessage/></i>
                    </div>
                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-3xl text-2xl mt-2'>Live Chat</h3>
                    <p className="font-roboto group-hover:text-white font-light text-textprimary text-base mt-6">Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.</p>
                </div>
                <div className="md:w-[32%] mt-[50px] relative group shadow-2xl rounded-xl py-8 px-8 text-center hover:-translate-y-6 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 ">
                    <div className="flex justify-center">
                    <i className="text-primary group-hover:text-white text-7xl mx-auto"><GrSettingsOption/></i>
                    </div>
                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-3xl text-2xl mt-2'>Fully Functional</h3>
                    <p className="font-roboto group-hover:text-white font-light text-textprimary text-base mt-6">Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.</p>
                </div>
                <div className="md:w-[32%] mt-[50px] relative group shadow-2xl rounded-xl py-8 px-8 text-center hover:-translate-y-6 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 duration-300 ">
                    <div className="flex justify-center">
                    <i className="text-primary group-hover:text-white text-7xl mx-auto"><MdOutlineLinkedCamera/></i>
                    </div>
                    <h3 className='font-roboto group-hover:text-white font-bold text-textprimary md:text-3xl text-2xl mt-2'>4k Camera</h3>
                    <p className="font-roboto group-hover:text-white font-light text-textprimary text-base mt-6">Viewing hastily or written dearest elderly up weather. direction so sweetness, Donec dearest justo eget felis.</p>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default Prolab