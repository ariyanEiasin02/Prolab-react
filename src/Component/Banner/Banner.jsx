import React from 'react'
import shape from '../../assets/bg-shape.png'
import bannerImg from '../../assets/w4.png'
const Banner = () => {
    return (
        <>
            <section className='bg-navbar md:py-56 relative'>
                <img className='absolute bottom-0 w-full' src={shape} alt="shape" />
                <div className="max-w-container mx-auto">
                    <div className="md:flex justify-between items-center">
                        <div className="md:w-2/4 md:px-0 px-6 sm:pt-[700px] md:pt-0 pt-[650px] md:pb-0 pb-24">
                            <h1 className='font-roboto font-bold text-textprimary md:text-6xl text-4xl'>Best digital watch for your daily life</h1>
                            <p className="font-roboto font-light text-textprimary text-base md:w-[85%] mt-6">
                                Effects present letters inquiry no an removed or friends. Desire behind
                                latter me though in. Supposing
                                shameless am engrossed itatibus additions.
                            </p>
                            <div className="mt-12">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-10 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                        </div>
                        <div className="md:w-2/4 md:relative">
                            <img className='w-[340px] absolute sm:top-[40%] top-[30%] md:top-[0%] left-[50%] md:left-[65%] -translate-y-1/2 -translate-x-1/2 z-[2]' src={bannerImg} alt="banner" />
                            <div className="absolute w-[300px] h-[300px] bg-service md:top-[20%] sm:top-[40%] top-[30%] left-[50%] md:left-[65%] -translate-y-1/2 -translate-x-1/2 rounded-full z-[1] animate-shadow-pulse"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner


