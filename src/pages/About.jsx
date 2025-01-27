import React from 'react'
import founder from "../images/founder.png";

const About = () => {
  return (
    <div className='min-h-screen p-7 '>
        <div className='grid grid-cols-2 rounded-2xl bg-yellow-400 p-5 shadow-xl w-full justify-center'>
            <div className='grid grid-rows-3 items-center'>
                <div className='font-bold text-6xl text-center'></div>
                <div><img src={founder} alt="Spend-Wise" className="h-[300px] w-[300px] rounded-full shadow-2xl m-auto -mt-25" /></div>
                <div className='font-bold text-4xl text-center mt-10'>Atharva Ganesh Gourshete</div>
            </div>
            <div className='font-bold text-2xl items-center my-35 mr-10 block'>Atharva Ganesh Gourshete is the visionary behind Spend-Wise, a platform dedicated to helping individuals track and manage their expenses effortlessly. Currently pursuing his second year at A.P. Shah Institute of Technology, Atharva is honing his skills as a web developer while balancing his entrepreneurial journey. His innovative approach and passion for technology drive his mission to create impactful solutions for everyday challenges.</div>
        </div>  
    </div>
  )
}

export default About