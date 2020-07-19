import React, { useEffect } from 'react';
import './contact.scss';
import gsap from 'gsap/gsap-core';
import { CSSRulePlugin } from 'gsap/all';

const Contact =()=>{
    useEffect(()=>{
        gsap.registerPlugin(CSSRulePlugin)
        gsap.from('.title',1.2,{
            scale: 0.2
        })
    },[])
    return(
        <div className='contact'>
            <span className='title'>Contact</span>
            <div className='all'>
                <span><strong>Mail me @ </strong>tushargpt224@gmail.com</span>
                <div>
                    <span><a href='https://www.instagram.com/tusha_aar/' target='_'><img src='https://image.flaticon.com/icons/png/512/87/87390.png' alt='img'/></a></span>
                    <span><a href='https://github.com/Tusha-ar' target='_'><img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='img'/></a></span>
                    <span><a href='https://www.linkedin.com/in/tushar-gupta-53002312a/' target="_"><img src='https://image.flaticon.com/icons/png/512/61/61109.png' alt='img'/></a></span>
                </div>
            </div>
        </div>
    )
}

export default Contact