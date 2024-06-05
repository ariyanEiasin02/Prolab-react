import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'
const Navbar = () => {
    const [showNavbar,setShowNavbar] =useState(false);

    const handleNavbar = () =>{
        setShowNavbar(!showNavbar)
    }
    return (
        <>
            <nav className='bg-navbar px-4 md:px-0 py-4 border-b-2 border-[#DEE0E5]'>
                <div className="max-w-container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="">
                            <img src={logo} alt="" />
                        </div>
                       <div>
                       <div onClick={handleNavbar} className="md:hidden">
                            {
                                showNavbar ? <i className="text-[#343a40] text-xl"><IoMdClose/></i> : <i className="text-[#343a40] text-xl"><FaBars/></i>
                            }
                        </div>
                        <div className=''>
                            <ul className={`md:flex gap-x-12 py-6 md:py-0 px-6 md:px-0 absolute md:static duration-300 ${showNavbar ? "left-[0] bg-white z-[6] top-[74px] w-full" : "-left-96 top-[74px] w-full"}`}>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] md:after:bottom-[-28px]
                                    after:bottom-[-10px]  after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full' href="#">Home</a>
                                </li>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] after:bottom-[-10px] md:after:bottom-[-28px]  after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full' href="#">About</a>
                                </li>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] after:bottom-[-10px] md:after:bottom-[-28px]  after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full' href="#">Features</a>
                                </li>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] after:bottom-[-10px]  md:after:bottom-[-28px]  after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full' href="#">Products</a>
                                </li>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] after:bottom-[-10px] md:after:bottom-[-28px]  after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full' href="#">Pages</a>
                                </li>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] after:bottom-[-10px] md:after:bottom-[-28px]  after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full' href="#">Faq</a>
                                </li>
                                <li className='mt-4 md:mt-0'>
                                    <a className='font-roboto relative font-semibold text-base text-[#242424] after:content-[""] after:w-0 after:h-[4px] after:bottom-[-10px]  md:after:bottom-[-28px] after:left-0 after:absolute hover:after:hover:bg-primary hover:after:w-full after:duration-100' href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar





 


