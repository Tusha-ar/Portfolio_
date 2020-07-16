import React from 'react';
import './projectCard.scss';

const ProjectCard = (props)=>{
    return(
        <div className='projectCard' data-aos='fade-up'>
            <img src={props.img}/>
            <h2>{props.title}</h2>
        </div>
    )
}


export default ProjectCard