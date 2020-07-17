import React, { useState } from 'react';
import './header.scss'
import gsap from 'gsap/gsap-core';
import { CSSRulePlugin } from 'gsap/all';


const Header =()=>{
    useState(()=>{
        gsap.registerPlugin(CSSRulePlugin)
        gsap.from('.header', 1.5, {
            scale: 1.2
        })
    })
    return(
        <div className='header'>
            Tushar
        </div>
    )
}

export default Header