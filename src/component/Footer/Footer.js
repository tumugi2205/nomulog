import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'

function Footer(){
    return(
      <div className="footer">
        <div className="footer__items">
          <Link to='/'>
            <div><i className="fa fa-home"></i>Home</div>
          </Link>
          <Link to='#'>
            <div>About</div>
          </Link>
          <Link to='/articles'>
            <div>Articles</div>
          </Link>
          <Link to='/diarys'>
            <div>Diary</div>
          </Link>
        </div>
        <div className="copyright">
          Copyright2020 NomuLog
        </div>
      </div>
    )
}

export default Footer;
