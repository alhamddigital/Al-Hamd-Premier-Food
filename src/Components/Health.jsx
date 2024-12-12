import React, { useEffect, useRef } from 'react';
// import { useDispatch } from 'react-redux';
// import { dairyHealth } from '../Redux/Slice';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Health = () => {
    // const dispatch = useDispatch();
    const healthRef = useRef();
    const left = useRef();
    const right = useRef();

    useEffect(() => {
        // GSAP animation for both divs without changing opacity
        const handleResize = () => {
            const screenWidth = window.innerWidth;

            // Adjust the animations based on the screen size
            const leftStartX = screenWidth <= 640 ? '0%' : '-100%'; // for sm and down, no animation on the left
            const rightStartX = screenWidth <= 640 ? '0%' : '100%'; // for sm and down, no animation on the right

            gsap.fromTo(left.current, { x: leftStartX }, {
                x: '0%', // Move to its original position
                scrollTrigger: {
                    trigger: left.current,
                    start: 'top 90%',
                    end: 'top 40%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            });

            gsap.fromTo(right.current, { x: rightStartX }, {
                x: '0%',
                scrollTrigger: {
                    trigger: right.current,
                    start: 'top 90%',
                    end: 'top 40%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                    once: false,
                },
            });
        };

        // Initial animation setup
        handleResize();

        // Add event listeners
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         dispatch(dairyHealth(healthRef.current.getBoundingClientRect().top));
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     // Cleanup on component unmount
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [dispatch]);

    return (
        <div ref={healthRef} id="health" className='gap-3 lg:py-9 pt-9 px-3 lg:px-[60px]'>
            <h1 className='text-xl text-center font-[600] text-[rgb(82,82,82)]'>Animal Health</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-9 sm:mt-5 lg:mt-5 p-2'>
                <div ref={left} className='customShadow flex justify-center flex-col p-2 rounded'>
                    <p className='text-[rgb(82,82,82)] mt-3 text-justify'>At Food Waikato, animal health is at the heart of everything we do. We are dedicated to ensuring that every calf receives the essential nutrients it needs, which is why we only collect milk after the critical 6-12 hour window. Our commitment to quality nutrition not only supports the calves' growth but also lays the foundation for their long-term health. By prioritizing these crucial early hours, we ensure that every calf has the best start in life, fostering strong and resilient future generations</p>
                    <p className='text-[rgb(82,82,82)] mt-3 text-justify'>Our partnerships with farms are built on a foundation of best practices, where animal welfare is prioritised at every stage. By working with us, you are joining a community of farmers who are committed to the highest standards of animal care, ensuring that both your livestock and your farm thrive sustainably.</p>
                    <p className='text-[rgb(82,82,82)] mt-3 text-justify'>Our commitment extends beyond just health and nutrition; at Food Waikato, we believe in sustainable farming practices that benefit both the animals and the environment. We work closely with farmers to implement eco-friendly feeding and waste management techniques, reducing the ecological footprint while promoting natural resource conservation.</p>
                </div>
                <div ref={right} className='flex justify-center items-center'>
                        <img className='w-full h-full' src="https://img.freepik.com/free-photo/cows-green-field-blue-sky_335224-507.jpg?semt=ais_hybrid" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Health;
