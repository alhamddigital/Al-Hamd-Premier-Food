import React, { useEffect, useState } from 'react'
import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { IoHomeSharp } from "react-icons/io5";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaListOl } from "react-icons/fa6";
import { GiHighGrass } from "react-icons/gi";
import { RiSyringeFill } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
// import { useSelector } from 'react-redux';
import { IoMdHome } from "react-icons/io";


const Navbar = () => {
  const [checkSidebar, setSidebar] = useState(false)
//   const { dairyHomeTop, dairyFeedTop, dairyAboutTop, dairyHealthTop, dairyRuleTop, dairyTeamTop } = useSelector(state => state.company)
  const [currentCategory, setcurrentCategory] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false);


//   useEffect(() => {

//     if (dairyHomeTop < window.innerHeight) {
//       setcurrentCategory("home")
//     }
//     if (dairyFeedTop < window.innerHeight) {
//       setcurrentCategory("feed")
//     }
//     if (dairyRuleTop < window.innerHeight) {
//       setcurrentCategory("rule")
//     }
//     if (dairyAboutTop < window.innerHeight) {
//       setcurrentCategory("about")
//     }
//     if (dairyHealthTop < window.innerHeight) {
//       setcurrentCategory("health")
//     }
//     if (dairyTeamTop < window.innerHeight) {
//       setcurrentCategory("team")
//     }
//   }, [dairyHomeTop, dairyFeedTop, dairyHealthTop, dairyRuleTop, dairyTeamTop])

  const handleHamburger = () => {
    setSidebar(!checkSidebar)
  }

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * .99) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOverlay = (event) => {
    if (event.target.classList.contains("overlay")) {
      setSidebar(false)
    }
  }

  const handleCross = () => {
    setSidebar(false)
  }

  useEffect(() => {
    if (checkSidebar) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [checkSidebar]);

  // console.log(dairyHomeTop)

  return (
    <>
      <div className={`w-[100%] h-[60px] sm:h-[80px] ${isScrolled ? "customShadow" : ""} z-10 sticky top-0 left-0 bg-white flex justify-between items-center lg:mt-0 px-2 lg:px-9`}>


      <div className='flex items-center'>
          <div className='logosAnimation w-[80px]'>
            <a href='/dairyHome'>
              <img
                className='w-full h-full cursor-pointer'
                src="https://res.cloudinary.com/djpvajewe/image/upload/v1732857806/logo2_kaduuv.png"
                alt=''
              />
            </a>
          </div>

        </div>


        <ul className='hidden md:flex'>
          <li className={`cursor-pointer px-2 py-[6px] ml-3 ${currentCategory === "home" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded`}><a href="#home">Home</a></li>
          <li className={`cursor-pointer px-2 py-[6px] ml-3 ${currentCategory === "feed" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded`}><a href="#feed">Feed</a></li>
          <li className={`cursor-pointer px-2 py-[6px] ml-3 ${currentCategory === "rule" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded`}><a href="#rule">Rules</a></li>
          <li className={`cursor-pointer px-2 py-[6px] ml-3 ${currentCategory === "about" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded`}><a href="#about">About Form</a></li>
          <li className={`cursor-pointer px-2 py-[6px] ml-3 ${currentCategory === "health" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded`}><a href="#health">Health</a></li>
          <li className={`cursor-pointer px-2 py-[6px] ml-3 ${currentCategory === "team" ? "bg-black text-white" : ""} hover:bg-black hover:text-white rounded`}><a href="#team">Team</a></li>
        </ul>

        <div onClick={handleHamburger} className='text-3xl cursor-pointer md:hidden'>
          <HiOutlineBars3 />
        </div>

      </div>



      {/* ------------------------------Sidebar--------------------------------- */}


      <div onClick={handleOverlay} className={`overlay w-full h-screen z-20 bg-[rgba(0,0,0,0.6)] ${checkSidebar ? "visible" : "invisible"} fixed top-0 left-0 cursor-crosshair`}>
        <div className='w-[280px] sm:w-[300px] h-screen bg-[rgb(249,250,251)] absolute top-0 right-0 cursor-auto'>
          <div onClick={handleCross} className='w-[35px] h-[35px] absolute top-2 right-2 rounded-full border-2 border-black text-black flex justify-center items-center text-2xl cursor-pointer hover:bg-black hover:text-white'><RxCross2 /></div>
          <h1 className='ml-2 text-xl mt-4'>Al Hamd Premier Food</h1>

          <ul className='px-1 mt-3'>

            <li onClick={handleCross} className={`flex items-center mt-1 ${currentCategory === "home" ? "bg-[rgb(231,236,245)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}>
              <a href="#home" className='flex items-center text-black w-full'>
                <IoHomeSharp className='text-xl text-[rgb(107,114,128)] group-hover:text-black' />
                <span className='ml-3'>Home</span>
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${currentCategory === "feed" ? "bg-[rgb(231,236,245)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}>
              <a href="#feed" className='flex items-center text-black w-full'>
                <PiBagSimpleFill className='text-xl text-[rgb(107,114,128)] group-hover:text-black' />
                <span className='ml-3'>Feed</span>
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${currentCategory === "rule" ? "bg-[rgb(231,236,245)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}>
              <a href="#rule" className='flex items-center text-black w-full'>
                <FaListOl className='text-xl text-[rgb(107,114,128)] group-hover:text-black' />
                <span className='ml-3'>Rules</span>
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${currentCategory === "about" ? "bg-[rgb(231,236,245)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}>
              <a href="#about" className='flex items-center text-black w-full'>
                <GiHighGrass className='text-xl text-[rgb(107,114,128)] group-hover:text-black' />
                <span className='ml-3'>About Form</span>
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${currentCategory === "health" ? "bg-[rgb(231,236,245)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}>
              <a href="#health" className='flex items-center text-black w-full'>
                <RiSyringeFill className='text-xl text-[rgb(107,114,128)] group-hover:text-black' />
                <span className='ml-3'>Health</span>
              </a>
            </li>
            <li onClick={handleCross} className={`flex items-center mt-1 ${currentCategory === "team" ? "bg-[rgb(231,236,245)] text-black" : ""} cursor-pointer hover:bg-[rgb(231,236,245)] group p-1`}>
              <a href="#team" className='flex items-center text-black w-full'>
                <RiTeamFill className='text-xl text-[rgb(107,114,128)] group-hover:text-black' />
                <span className='ml-3'>Team</span>
              </a>
            </li>

          </ul>

        </div>
      </div>

    </>
  )
}

export default Navbar