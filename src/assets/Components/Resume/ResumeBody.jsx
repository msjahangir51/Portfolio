import React from 'react'
import "./Resume.css"

import { ImProfile } from "react-icons/im";
import { GiSkills } from "react-icons/gi";

import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import { RiReactjsFill } from "react-icons/ri";


function ResumeBody() {
  return (
    <div className='ResumeBody'>
        <div className='conteinar resume'>
            <div className="resumeText">
                <h1>Resume</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui quia modi! Expedita aspernatur delectus est temporibus saepe, sapiente dicta maxime voluptate pariatur nisi. Ex est animi nam ipsum iure?</p>
            </div>

            <div className="Resume_Row">
                <div className="col">
                       <h1><ImProfile/> Profile</h1> 
                       <div>
                        <p className='desc'>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                        <div>
                            <p>FULLNAME</p>
                            <span>MD: Jahangir Alom</span>
                            <p>BIRTH DATE:</p>
                            <span>06/09/2006</span>
                            <p>Job</p>
                            <span>Freelancer, Frontend Developer</span>
                            <p>EMAIL</p>
                            <span>ms.jahangir51@gmail.com</span>
                        </div>
                       </div>
                </div>
                <div className="col">
                       <h1><GiSkills/> SKILLS</h1> 
                       <p className='desc'>Lorem ipsum Qui veniam ut consequat ex ullamco nulla in non ut esse in magna sint minim officia consectetur nisi commodo ea magna pariatur nisi cillum.</p>

                       <ul>
                        <li><FaHtml5/> HTML 5</li>
                        <li><FaCss3Alt/> CSS 3</li>
                        <li><SiTailwindcss/> Tailwind CSS</li>
                        <li><FaGithub/> Git Control</li>
                        <li><IoLogoJavascript/> Javascript</li>
                        <li><RiReactjsFill/> React js</li>
                       </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResumeBody