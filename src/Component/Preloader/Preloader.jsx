import React, { useEffect, useState } from 'react'

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    useEffect(() => {
        // Simulating API call delay
        setTimeout(() => {
          setData('');
          setLoading(false);
        }, 2000);
      }, []);
    return (
        <>
        {
            loading ?  <div className="w-full h-screen bg-prolader fixed top-0 left-0 z-[20]">
            <div className="loader animate-loader-pulse absolute top-[50%] left-[50%] w-[80px] h-[80px] -translate-y-2/4 -translate-x-2/4 rotate-45">
                <span className="absolute w-[40px] h-[40px] block bg-[#EE4040] top-0 left-0 animate-loaderBlock-pulse"></span>
                <span className="absolute w-[40px] h-[40px] block bg-[#EE4040] top-0 right-0 animate-loaderBlock-pulse animate-loaderBlockInverse-pulse"></span>
                <span className="absolute w-[40px] h-[40px] block bg-[#EE4040] bottom-0 left-0 animate-loaderBlock-pulse animate-loaderBlockInverse-pulse"></span>
                <span className="absolute w-[40px] h-[40px] block bg-[#EE4040] bottom-0 right-0 animate-loaderBlock-pulse"></span>
            </div>
        </div>
        :
        <div>
              <p>{data}</p>
            </div>
        }
           
    </>
  )
}

export default Preloader

