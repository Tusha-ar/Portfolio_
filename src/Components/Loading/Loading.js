import React from 'react';
import './loading.scss';
import loading from '../../Assets/loading.gif'

const Loading = ()=>
{
    return(
        <div className='loading'>
            <img src={loading} alt='loading....'/>
        </div>
    )
}

export default Loading