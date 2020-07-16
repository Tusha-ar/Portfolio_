import React, { useEffect } from 'react';
import './nav.scss';
import { Link } from 'react-router-dom';

const Nav=()=>{
    useEffect(()=>{
        document.querySelector('.nav').addEventListener('click', ()=>{
            document.querySelector('.nav').classList.toggle('hide')
            document.querySelector('.nav ul').classList.toggle('font')
        })
    },[])
    return(
        <div className='nav hide'>
            <ul>
                <Link to='/' className='link'><li>Home</li></Link>
                <Link to='/work' className='link'><li>My work</li></Link>
                <li>My skills</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav