import React, { useEffect } from 'react';
import './skills.scss';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/all';


const Skills=()=>{
    useEffect(()=>{
        gsap.registerPlugin(CSSRulePlugin)
        gsap.from('.skills span', 1.2,{
            scale: 0.2
        })
        gsap.from('.bar',2,{
            width: '0'
        })
    })
    return(
        <div className='skills'>
            <span>Skills</span>
            <p>
                Skills are just a matter of perspective.<br/>
                You can always learn a new one 😅.<br/>
                And I am always learning new things.<br/>
                Even the skills mentioned below are self taught 😉.
            </p>
            <div className='skill_bar'>
                <section className='bar' style={{width: '90%'}}>
                    html
                </section>
            </div>
            <div className='skill_bar'>
                <section className='bar' style={{width: '55%'}}>
                    ExpressJS
                </section>
            </div>
            <div className='skill_bar'>
                <section className='bar' style={{width: '88%'}}>
                    sass
                </section>
            </div>
            <div className='skill_bar'>
                <section className='bar' style={{width: '74%'}}>
                    ReactJS
                </section>
            </div>
            <div className='skill_bar'>
                <section className='bar' style={{width: '67%'}}>
                    C++
                </section>
            </div>
            <div className='skill_bar'>
                <section className='bar' style={{width: '60%'}}>
                    Python
                </section>
            </div>
        </div>
    )
}

export default Skills