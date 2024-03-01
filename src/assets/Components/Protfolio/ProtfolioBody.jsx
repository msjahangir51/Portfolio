import React, { useEffect, useRef, useState } from 'react'

import "./Protfolio.css";

import Protfolio from "../../Protfolio.json";
import { NavLink } from 'react-router-dom';
import { FaLink } from "react-icons/fa";


function ProtfolioBody() {
  const [filter, setFilter] = useState("All");

    
  return (
    <div className='ProtfolioBody'>
        <div className="conteinar ProtfolioMain">
            <div className='ProtfolioText'>
                <h1>Featured Works</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore, quia id nisi incidunt unde ipsam. Impedit, ducimus!</p>
            </div>
          <div className={`filtersBTNS`}>
            <button onClick={()=> setFilter("All")}>All</button>
            <button onClick={()=> setFilter("vector")}>vector</button>
            <button onClick={()=> setFilter("Agency")}>Agency</button>
            <button onClick={()=> setFilter("Portal")}>Portal</button>
            <button onClick={()=> setFilter("raster")}>raster</button>
          </div>
            <div className="ProductsCard">
              {
                Protfolio.map(item=>{
                  // console.log(item)
                  let {id,categories,ProductTitle,Productimg} = item;
                  return(
                    <div className={`Work ${filter === "All" ? "" : filter === categories ? "" : "hide"}`} key={id}>
                        <div className='CardIMG'>
                          <img src={Productimg} alt="" />
                          <div className='links'>
                            <FaLink/>
                          </div>
                        </div>
                          <h1>{ProductTitle}</h1>
                          <p>{categories}</p>
                      </div>
                      )
                      window.onload = ()=>{
                        // document.querySelector(".Work").classList.remove("hide");
                        // console.log()
                      }
                })
              }
            </div>
        </div>
    </div>
  )

}

export default ProtfolioBody