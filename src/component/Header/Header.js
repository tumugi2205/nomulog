import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

function Header(){
    return(
    <>
        <header>
          <Link to='/'>
              <div className="blog_title">NomuLog</div>
          </Link>
          <div className="header__tags">
            <Link to='#'>
              <div className="blog_about">ABOUT</div>
            </Link>
            <Link to='/articles'>
              <div className="blog_articles">ARTICLES</div>
            </Link>
            <Link to='/diarys'>
              <div className="blog_diarys">DIARYS</div>
            </Link>
              <div className="blog_search"><i className="fa fa-search" /><input type="text"/></div>
          </div>
        </header>
    </>
    )
}

export default Header;
