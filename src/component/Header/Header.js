import React, {useState, useEffect} from "react";
import './Header.css';
import Pickup from '../../component/Pickup/Pickup'
import News from '../../component/News/News'
import BlogList from '../../component/BlogList/BlogList'
import axios from 'axios';
import { Link } from 'react-router-dom'

function Header({ setflag }){
    return(
    <>
        <header>
          <Link to='/'>
              <div className="blog_title" onClick={()=>{setflag("all")}} >NomuLog</div>
          </Link>
          <div className="header__tags">
            <Link to='#'>
              <div className="blog_about">ABOUT</div>
            </Link>
            <Link to='#/articles'>
              <div className="blog_articles" onClick={()=>{setflag("blog")}}>ARTICLES</div>
            </Link>
            <Link to='#/diary'>
              <div className="blog_diarys" onClick={()=>{setflag("diary")}}>DIARYS</div>
            </Link>
            <Link to='/umamusu'>
              {/* <div className="umamusu" onClick={()=>{setflag("umamusu")}}>ウマ娘</div> */}
              <div className="umamusu">ウマ娘</div>
            </Link>
              <div className="blog_search"><i className="fa fa-search" /><input type="text"/></div>
          </div>
        </header>
    </>
    )
}

export default Header;
