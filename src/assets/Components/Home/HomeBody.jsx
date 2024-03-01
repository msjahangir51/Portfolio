import React from 'react'
import "./Home.css";
import introImg from "../../Images/hero-img.png.webp";
// icons 
import { CgArrowLongRight } from "react-icons/cg";

import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// end of icons 
function HomeBody() {
  return (
    <div className='HomeBody'>
        <div className="conteinar HomeMain">
            <div className="col intro-text-Section">
              <h5><CgArrowLongRight/> Hello</h5>
              <h1>I'm <span>Jems</span> Kemerun</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores officiis esse vitae in architecto ducimus corrupti? Illo non aliquid impedit eius itaque exercitationem quos fugit dolor repudiandae? Itaque, illo.</p>
              <button>Download Cv</button>
            </div>
            <div className="col intro-img-section">
              <img src={introImg} alt="" /> 

              <div className="social">
                <a href="#"><BsFacebook/></a>  
                <a href="#"><FaInstagramSquare/></a>  
                <a href="#"><FaTwitterSquare/></a>  
                <a href="#"><FaLinkedin/></a>  
              </div>      
            </div>
        </div>
    </div>
  )
}

export default HomeBody