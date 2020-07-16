import React, { useEffect, useState } from 'react';
import './work.scss';
import ProjectCard from '../ProjectCard/ProjectCard';
// import gsap from 'gsap/gsap-core';
// import { CSSRulePlugin } from 'gsap/all';
import Aos from 'aos';
import 'aos/dist/aos.css'



const Work = ()=>{
    useState(()=>{
        Aos.init({once: true, duration: 1000})
        // gsap.registerPlugin(CSSRulePlugin)
        // gsap.from('.title', 3, {
        //     scale: 0.2,
        //     color: 'red'
        // })
    })
    return(
        <div className='work'>
            <span className='title'>Projects</span>
            <div className='projects'>
                <ProjectCard img={require('../../Assets/Projects/filter.png')} title= 'Filter out'/>
                <ProjectCard img={require('../../Assets/Projects/mukul.png')} title= "mukul's portfolio"/>
                <ProjectCard img= {require('../../Assets/Projects/news.jpg')} title= 'News'/>
                <ProjectCard img={require('../../Assets/Projects/red_eyed.png')} title= 'Red eyed'/>
                <ProjectCard img={require('../../Assets/Projects/stocks.png')} title= 'stocks'/>            
                <ProjectCard img='https://raw.githubusercontent.com/Tusha-ar/Travel-Planner/master/ss/Screenshot%20(4).png' title= 'travel planner'/>            
            </div>
        </div>  
    )
}


export default Work