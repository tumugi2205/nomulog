import React, {useState, useEffect} from "react"
import './Home.css';
import Header from '../../component/Header/Header';
import News from '../../component/News/News'
import Tags from '../../component/Tags/Tags'
import Footer from '../../component/Footer/Footer'
import BuckNumber from '../../component/BuckNumber/BuckNumber'
import Pickup from '../../component/Pickup/Pickup'
import Twitter from '../../component/Twitter/Twitter'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Home = () => {
  const [blogList, setBlogList] = useState()
  useEffect(()=>{
      axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {})
      .then((response) => {
          setBlogList(response.data.body)
          console.log("in")
      });
  },[])
    return(
      <>
        <Header/>
        <div className="body">
          <div className="main_board">
              <News/>
              <Pickup  data={blogList}/>
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
    )
}

export default Home;
