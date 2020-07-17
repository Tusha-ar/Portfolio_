import React, { useEffect } from 'react';
import './skills.scss';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import CSSPlugin from 'gsap/CSSPlugin';

const C = CSSPlugin;  // here is the gotcha....


const Skills=()=>{
    useEffect(()=>{
        gsap.registerPlugin(CSSRulePlugin)
        gsap.from('.skills span', 1.2,{
            scale: 2
        })
    })
    return(
        <div className='skills'>
            <span>Skills</span>
            <div className='skill_bar'>
                <section className='bar' style={{width: '50%'}}>
                    
                </section>
            </div>
        </div>
    )
}

export default Skills