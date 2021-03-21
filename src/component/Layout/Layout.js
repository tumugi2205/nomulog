import React, { useState, useEffect, useCallback, Children } from "react";
import Header from '../../component/Header/Header';
import Tags from '../../component/Tags/Tags'
import Footer from '../../component/Footer/Footer'
import BuckNumber from '../../component/BuckNumber/BuckNumber'
import Twitter from '../../component/Twitter/Twitter'


// ___________
//
export const Layout = (props) => {
  return (
    <>
    <Header/>
    <div className="body">
      <div className="main_board">
          {props.children}
      </div>
      <div className="menu_board">
        <div className="menu_fix">
          <Tags/>
          <BuckNumber/>
          <Twitter/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Layout;
// ___________
//
