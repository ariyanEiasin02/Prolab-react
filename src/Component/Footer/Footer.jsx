import React from 'react'
import shapeOne from '../../assets/bg-shape2.png'
import logo from '../../assets/logo.png'
import { FaFacebookF,FaTwitter,FaLinkedinIn,FaGoogle,FaGlobe} from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <section className='py-24 bg-navbar relative border-b-2 border-b-[#DEE0E5]'>
                <img className='absolute top-0 w-full' src={shapeOne} alt="shape" />
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <img  className='mx-auto' src={logo} alt="" />
                        <p className="font-roboto font-light text-textprimary text-base md:w-[50%] mt-6 mx-auto">Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but.</p>
                    </div>
                    <div className="flex justify-center mt-[50px]">
                        <ul className="flex gap-x-4 mx-auto">
                            <li className="w-12 h-12 rounded-full flex justify-center items-center bg-[#0069F7]"><a  href="#"><FaFacebookF className="text-base text-white"/></a></li>
                            <li className="w-12 h-12 rounded-full flex justify-center items-center bg-[#00C6F7]"><a  href="#"><FaTwitter  className="text-base text-white"/></a></li>
                            <li className="w-12 h-12 rounded-full flex justify-center items-center bg-[#007BB5]"><a  href="#"><FaLinkedinIn   className="text-base text-white"/></a></li>
                            <li className="w-12 h-12 rounded-full flex justify-center items-center bg-[#FF0000]"><a  href="#"><FaGoogle    className="text-base text-white"/></a></li>
                            <li className="w-12 h-12 rounded-full flex justify-center items-center bg-[#F7007A]"><a  href="#"><FaGlobe className="text-base text-white"/></a></li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="py-6 bg-navbar text-center">
                <p className="font-roboto font-light text-textprimary text-base">Copyright © 2020. All rights reserved by GeniusDevs</p>
            </div>
        </div>
    )
}

export default Footer