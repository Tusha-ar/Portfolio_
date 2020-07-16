import React, { useEffect } from 'react';
import './main.scss'
import Details_Home from '../Details_home/Details_Home';
import gsap from 'gsap/gsap-core';
import { CSSRulePlugin } from 'gsap/all';


const Main = ()=>{
    useEffect(()=>{
        gsap.registerPlugin(CSSRulePlugin);
        gsap.from('.name', 1.5,{
            scale: 0.1
        })
        gsap.from('.det', 1.5, {
            y: 200
        })

    })
    return(
        <div className='main'>
            <img src={require('../../Assets/ME.jpg')} alt='img'/>
            <span className='name'>Tu</span>
            <Details_Home/>
        </div>
    )
}

export default Main