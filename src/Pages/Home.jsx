import React from 'react'
import HeroSection from '../Components/HeroSection'
import Feeds from '../Components/Feeds'
import Rules from '../Components/Rules'
import About from '../Components/About'
import Health from '../Components/Health'
import Team from '../Components/Team'
import Footer from '../Components/Footer'
import DairySlider from '../Components/DairySlider'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <Feeds/>
        <Rules/>
        <DairySlider/>
        <About/>
        <Health/>
        <Team/>
        <Footer/>
    </>
  )
}

export default Home