import React from 'react'
import watchOne from '../../assets/w1.png'
import watchTwo from '../../assets/w3.png'
import watchThree from '../../assets/w2.png'
import watchFour from '../../assets/w4.png'
const Compare = () => {
    return (
        <div>
            <section className='py-24 relative'>
                <div className="max-w-container mx-auto">
                    <div className="text-center px-6 md:px-6">
                        <h2 className='font-roboto font-bold text-textprimary md:text-4xl text-3xl'>Compare Similar Products</h2>
                        <p className="font-roboto font-light text-textprimary text-base md:w-[61%] mt-6 mx-auto">Prepared is me marianne pleasure likewise debating. Wonder an unable except better stairs do ye admire. His secure called esteem praise.</p>
                    </div>
                    <div className="mt-[50px] hidden md:block">
                        <div className="w-full flex">
                            <div className="w-[15%] px-4 border border-[#DEE2E6]"></div>
                            <div className="w-[23%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchOne} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Blue</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                            <div className="w-[23%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchFour} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch White</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                            <div className="w-[23%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchThree} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Black</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                            <div className="w-[23%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchTwo} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Grey</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          

                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base mt-2">Price</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$135</h2>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$124</h2>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$179</h2>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$159</h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Brand</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Color</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Blue</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">White</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Black</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Grey</p>
                            </div>
                        </div>
                        <div className="w-full flex bg-[#F2F2F2]">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Compatible with</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Android 4.0 iOS7 and above</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Android 5.0, iOS8 and above</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Android 6.0, iOS9 and above</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Android 7.0, iOS10 and above</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Dimensions</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">9 x 3.01 x 0.79 in</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">7 x 5.03 x 0.63 in</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">10 x 2.01 x 0.21 in</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base"></p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Weight</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">0.7 lb</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">2.4 ounces</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">0.9 lb</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">3.8 ounces</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">System Android</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">iOS</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">iOS, Android</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">Android</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">iOS, Android</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Battery Capacity</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">170mAh</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">180mAh</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">190mAh</p>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <p className="font-roboto font-normal text-textprimary text-base">200mAh</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[15%] py-2 px-4 border border-[#DEE2E6]">
                                
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <div className="my-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <div className="mt-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <div className="mt-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                            <div className="w-[23%] py-2 text-center border border-[#DEE2E6]">
                            <div className="mt-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] md:hidden">
                        <div className="w-full flex">
                            <div className="w-[30%] px-4 border border-[#DEE2E6]"></div>
                            <div className="w-[70%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchOne} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Blue</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base mt-2">Price</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$135</h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Brand</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Color</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Blue</p>
                            </div>
                        </div>
                        <div className="w-full flex bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Compatible with</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Android 4.0 iOS7 and above</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Dimensions</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">9 x 3.01 x 0.79 in</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Weight</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">0.7 lb</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">System Android</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">iOS</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Battery Capacity</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">170mAh</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                            <div className="my-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] md:hidden">
                        <div className="w-full flex">
                            <div className="w-[30%] px-4 border border-[#DEE2E6]"></div>
                            <div className="w-[70%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchFour} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Blue</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base mt-2">Price</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$124</h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Brand</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Color</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">White</p>
                            </div>
                        </div>
                        <div className="w-full flex bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Compatible with</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Android 5.0, iOS8 and above</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Dimensions</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">7 x 5.03 x 0.63 in</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Weight</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">2.4 ounces</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">System Android</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">iOS, Android</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Battery Capacity</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">180mAh</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                            <div className="my-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] md:hidden">
                        <div className="w-full flex">
                            <div className="w-[30%] px-4 border border-[#DEE2E6]"></div>
                            <div className="w-[70%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchThree} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Blue</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base mt-2">Price</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$179</h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Brand</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Color</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Black</p>
                            </div>
                        </div>
                        <div className="w-full flex bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Compatible with</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Android 6.0, iOS9 and above</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Dimensions</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">10 x 2.01 x 0.21 in</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Weight</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">0.9 lb</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">System Android</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Android</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Battery Capacity</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">190mAh</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                            <div className="my-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[50px] md:hidden">
                        <div className="w-full flex">
                            <div className="w-[30%] px-4 border border-[#DEE2E6]"></div>
                            <div className="w-[70%] border border-[#DEE2E6] text-center py-6">
                                <img className='w-[200px] mx-auto mt-[20px]' src={watchTwo} alt="" />
                                <h3 className="font-roboto font-normal text-textprimary text-xl mt-4">Watch Blue</h3>
                                <p className="font-roboto font-light text-textprimary text-sm mt-2">For Man & Woman</p>
                            </div>                          
                        </div>
                        <div className="w-full flex items-center">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base mt-2">Price</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <h2 className="font-roboto font-bold text-primary text-2xl">$159</h2>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Brand</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Apple</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Color</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Grey</p>
                            </div>
                        </div>
                        <div className="w-full flex bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Compatible with</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">Android 7.0, iOS10 and above</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Dimensions</p>
                            </div>
                            <div className="w-[70%] py-4 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base"></p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Item Weight</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">3.8 ounces</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">System Android</p>
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">iOS, Android</p>
                            </div>
                        </div>
                        <div className="w-full flex items-center bg-[#F2F2F2]">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                <p className="font-roboto font-semibold text-textprimary text-base">Battery Capacity</p>
                            </div>
                            <div className="w-[70%] py-5 text-center border border-[#DEE2E6]">
                                <p className="font-roboto font-normal text-textprimary text-base">200mAh</p>
                            </div>
                        </div>
                        <div className="w-full flex">
                            <div className="w-[30%] py-2 px-4 border border-[#DEE2E6]">
                                
                            </div>
                            <div className="w-[70%] py-2 text-center border border-[#DEE2E6]">
                            <div className="my-4">
                                <a href="#" className="font-roboto font-bold text-textprimary text-base bg-primary text-white py-3 px-14 border hover:bg-white hover:text-primary border-textprimary rounded duration-300 after:content-[''] after:w-full after:top-0 after:right-[3px] after:absolute hover:after:w-0 after:h-full after:duration-500 after:rounded hover:after:bg-primary before:content-[''] before:w-full before:top-0 before:right-[3px] before:absolute hover:before:w-0 before:h-full before:duration-700 before:rounded hover:before:bg-primary relative"><span className=''>Buy Now</span> </a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Compare