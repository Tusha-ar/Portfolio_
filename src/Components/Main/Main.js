import React, { useEffect, useState } from 'react';
import './main.scss'
import img from '../../Assets/ME.jpg' 
import Details_Home from '../Details_home/Details_Home';
import gsap from 'gsap/gsap-core';
import { CSSRulePlugin } from 'gsap/all';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Main = ()=>{
    const[loading, setLoading] = useState(true)
    useEffect(()=>{
        Aos.init({once: true, duration: 2000})
        // gsap.registerPlugin(CSSRulePlugin);
        // gsap.from('.name', 1.5,{
        //     scale: 1.2
        // })
        // gsap.from('.det', 1.5, {
        //     y: 200
        // })
    })
    const loadingHandler=()=>{
        setLoading(false)
    }
    return(
        <div className='main'>
            <img src={img} alt='img' onLoad={loadingHandler} data-aos='zoom-in'/>
            <span className='name' data-aos='fade' data-aos-duration='2000'>Tu</span>
            <Details_Home/>
        </div>
    )
}

export default Main