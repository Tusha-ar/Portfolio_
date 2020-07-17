import React, { useEffect } from 'react';
import './main.scss'
import img from '../../Assets/ME.jpg' 
import Details_Home from '../Details_home/Details_Home';
import Aos from 'aos'
import 'aos/dist/aos.css'


const Main = ()=>{
    useEffect(()=>{
        Aos.init({once: true, duration: 2000})
    })
    return(
        <div className='main'>
            <img src={img} alt='img'/>
            <span className='name'>Tu</span>
            <Details_Home/>  
        </div>
    )
}

export default Main