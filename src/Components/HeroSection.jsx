import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
// import Navbar from "../DairyComponents/Navbar"
// import { useDispatch } from 'react-redux'
// import { dairyHome } from '../Redux/Slice'

const HeroSection = () => {
    // const dispatch = useDispatch()
    const homeRef = useRef()
    const [progress, setProgress] = useState(0)

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         dispatch(dairyHome(homeRef.current.getBoundingClientRect().top))
    //     })
    // }, [])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])


    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const winHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const totalScroll = docHeight - winHeight;

            const scrollPercentage = Math.round((scrollTop / totalScroll) * 100);
            setProgress(scrollPercentage);
        });
    }, []);

    console.log(progress, "Progress")

    return (
        <>
            <Navbar />
            <div ref={homeRef} id="home" className='dairyHeroSec w-full h-[100vh] py-[1px]'>

                <div
                    style={{ width: `${progress}%` }}
                    className="h-[5px] bg-gray-600 fixed z-20 top-0 left-0 transition-all duration-300"
                ></div>
                
                <div className='w-[90%] md:w-[80%] lg:w-[50%] lg:mx-0 ml-3 md:ml-[25px] lg:ml-[70px] mt-[10px] md:mt-[70px] lg:mt-[50px] pr-2'>
                    <h1 className='text-white text-[35px] lg:text-[50px] lg:leading-[60px] font-[700]'>Al Hamd Premier Food</h1>
                    <p className='text-white font-[400] text-xl mt-5'>"Our dairy farm provides 100% pure, fresh milk sourced directly from healthy cows. We prioritize hygiene and quality at every step, ensuring clean and nutritious milk that meets the highest standards for your family’s health and well-being."</p>
                    <div className='w-[120px] h-[40px] mt-9 text-white rounded cursor-pointer hover:bg-red-500 bg-[rgb(191,27,45)] flex justify-center items-center'>Read More</div>
                </div>
            </div>
        </>
    )
}

export default HeroSection