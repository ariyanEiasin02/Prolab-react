import React from 'react'
import { FaPhone  } from 'react-icons/fa'
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <section className='py-24 relative'>
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Contact Us</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="md:flex justify-between mt-[50px]">
                        <div className="md:w-[32%] bg-white text-center mt-[20px] md:mt-0 py-12 px-12 rounded-xl shadow-2xl">
                            <div className="flex justify-center items-center relative">
                                <i className='text-primary text-5xl'><FaPhone /></i>
                                <div className="w-[90px] h-[90px] border-2 border-primary rounded-full animate-border-play border-dotted absolute top-[-20px] left-[82px] duration-300"></div>
                            </div>
                            <p className="font-roboto font-light text-textprimary text-base mt-8">+333 123 4565 7898</p>
                            <p className="font-roboto font-light text-textprimary text-base mt-2">+333 153 4575 7893</p>
                        </div>
                        <div className="md:w-[32%] mt-[30px] md:mt-0 bg-white text-center py-12 px-12 rounded-xl shadow-2xl">
                            <div className="flex justify-center items-center relative">
                                <i className='text-primary text-5xl'><CgMail /></i>
                                <div className="w-[90px] h-[90px] border-2 border-primary rounded-full animate-border-play border-dotted absolute top-[-20px] left-[82px] duration-300"></div>
                            </div>
                            <p className="font-roboto font-light text-textprimary text-base mt-8">demoname@name.com</p>
                            <p className="font-roboto font-light text-textprimary text-base mt-2">anothername@name.com</p>
                        </div>
                        <div className="md:w-[32%] bg-white mt-[30px] md:mt-0 text-center py-12 px-12 rounded-xl shadow-2xl">
                            <div className="flex justify-center items-center relative">
                                <i className='text-primary text-5xl'><FaLocationDot /></i>
                                <div className="w-[90px] h-[90px] border-2 border-primary rounded-full animate-border-play border-dotted absolute top-[-20px] left-[82px] duration-300"></div>
                            </div>
                            <p className="font-roboto font-light text-textprimary text-base mt-8">140 Berkley Street, Philadelphia, Pennsylvania</p>
                        </div>
                    </div>
                    <div className="md:flex justify-between mt-[50px]">
                        <div className="md:w-[48%] bg-white shadow-2xl rounded-xl px-4 py-6">
                            <input className='w-full py-4 px-6 border mt-4 outline-none rounded-xl font-roboto font-light text-textprimary text-base' type="text" placeholder='Your Name'/>
                            <input className='w-full py-4 px-6 border mt-4 outline-none rounded-xl font-roboto font-light text-textprimary text-base' type="email" placeholder='Enter Your Email'/>
                            <textarea className='w-full h-36 py-4 px-6 border mt-4 outline-none rounded-xl font-roboto font-light text-textprimary text-base' name="" id="" placeholder='Write your message here'></textarea>
                            <div className="mt-12 pb-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-4 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Send Message</span> </a>
                            </div>
                        </div>
                        <div className="md:w-[48%] mt-[30px] md:mt-0 rounded-xl shadow-2xl bg-white">
                            <div className="p-4 w-full h-full">
                            <iframe  className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.036955468777!2d90.36556226130591!3d23.747049949765824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b33cffc3fb%3A0x4a826f475fd312af!2sDhanmondi%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1717087688223!5m2!1sen!2sbd"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact