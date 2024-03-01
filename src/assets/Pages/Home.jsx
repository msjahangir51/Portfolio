import React from 'react'
import HomeBody from '../Components/Home/HomeBody'
import Navbar from '../Components/Navbar/Navbar'
import AboutBody from '../Components/About/AboutBody'
import ServicesBody from '../Components/Services/ServicesBody'
import ProtfolioBody from '../Components/Protfolio/ProtfolioBody'
import ResumeBody from '../Components/Resume/ResumeBody'
import Footer from '../Components/Footer/Footer'

import { PiArrowUpDuotone } from "react-icons/pi";
import { Link } from 'react-router-dom'
import ContactBody from '../Components/Contact/ContactBody'


function Home() {
  return (
    <>
    <Navbar/>
    <HomeBody/>
    <AboutBody/>
    <ServicesBody/>
    <ProtfolioBody/>
    <ResumeBody/>
    <a href='#'  className='HomeBTN'>
    <PiArrowUpDuotone/>
    </a>
    <ContactBody/>
    <Footer/>
    </>
  )
}

export default Home