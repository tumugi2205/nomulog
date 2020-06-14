import React from 'react';
import './Title.css';
import { Link } from 'react-router-dom'

function Title(){
    return(
        <Link to='/'>
        <div className="title">
            Nomu Log
        </div>
        </Link>
    )
}

export default Title;
