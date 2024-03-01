import React from 'react'
// css 
import "./About.css";
// end of css 
import { CgArrowLongRight } from "react-icons/cg";

import aboutImg from "../../Images/About-img.png";
function AboutBody() {
  return (
    <div className='aboutBody'>
      <div className="conteinar row">
        <div className="col">
          <h2><CgArrowLongRight/> About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque excepturi reprehenderit, repudiandae ipsam aliquam alias qui cum, rerum, velit fugit voluptatibus! Totam, ipsum. Maxime, quidem inventore quasi nobis repellat aspernatur.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam atque corrupti dolorem animi.
          </p>
          <button>Hire me</button>
          <button>Download Cv</button>
        </div>
        <div className="col-img">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutBody