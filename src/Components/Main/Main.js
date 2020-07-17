import React, { useEffect } from 'react';
import './main.scss'
import img from '../../Assets/ME.jpg' 
import Details_Home from '../Details_home/Details_Home';
import Aos from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap/gsap-core';
import { CSSRulePlugin } from 'gsap/all';


const Main = ()=>{
    useEffect(()=>{
        Aos.init({once: true, duration: 2000})
        gsap.registerPlugin(CSSRulePlugin)
        gsap.from('.name',1.5,{
            scale: 0.2
        })
        gsap.from('.img',2, {
            scale: 0.1
        })
    })
    return(
        <div className='main'>
            <img src={img} alt='img' className='img'/>
            <span className='name'>Tu</span>
            <Details_Home/>  
        </div>
    )
}

export default Main