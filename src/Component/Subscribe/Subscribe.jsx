import React from 'react'
import { IoIosSend } from "react-icons/io";
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
const Subscribe = () => {
  return (
    <div>
        <section className='py-24 relative'>
            <div className="max-w-container mx-auto">
                <div className="bg-map bg-cover bg-no-repeat bg-center">
                <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Subscribe To Get Updates</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="md:w-[70%] px-4 md:px-0 my-16 mx-auto relative">
                        <input className=' py-4 px-8 bg-white w-full shadow-xl rounded-full outline-none font-roboto font-light text-textprimary text-base' type="text" placeholder='Your email address...'/>
                        <div className='md:absolute mt-[30px] top-[16px] right-0'>
                            <a className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-4 px-12 rounded-full" href="">Subscribe <span><IoIosSend className='text-xl inline-block'/></span></a>
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <p className="font-roboto font-light text-textprimary text-base">Download Our App from</p>
                    </div>
                    <div className='mt-16 text-center'>
                            <div className="">
                            <a className="md:mr-4 mr-0 font-roboto font-bold text-textprimary text-xl md:inline-block block bg-primary text-white py-6 px-12 rounded" href=""><span><BsAndroid2 className='inline-block text-xl mr-2'/></span>Play Store</a>
                            <a className="md:ml-4 ml-0 md:mt-0 mt-4 font-roboto font-bold text-textprimary text-xl bg-primary md:inline-block block text-white py-6 px-12 rounded" href=""><span><FaApple  className='inline-block text-xl mr-2'/></span>App Store</a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Subscribe