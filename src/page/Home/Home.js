import React, {useState, useEffect} from "react"
import './Home.css';
import Header from '../../component/Header/Header';
import BlogList from '../../component/BlogList/BlogList'
import News from '../../component/News/News'
import Tags from '../../component/Tags/Tags'
import Footer from '../../component/Footer/Footer'
import BuckNumber from '../../component/BuckNumber/BuckNumber'
import Pickup from '../../component/Pickup/Pickup'
import Twitter from '../../component/Twitter/Twitter'
import axios from 'axios';
import { Link } from 'react-router-dom'
import UmaMusu from '../../component/UmaMusu/UmaMusu'



const Home = () => {
  const [blogList, setBlogList] = useState()
  const [flag, setflag] = useState("all")
  const [boardData, setboardData] = useState(
    <>
    <News/>
    <Pickup data=""/>
    </>)
  useEffect(()=>{
    if(flag === "all"){
      axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {"blog_type": flag})
      .then((response) => {
          setBlogList(response.data.body)
          setboardData(
            <>
            <News/>
            <Pickup  data={response.data.body}/>
            </>
          )
      });
    }
    else if(flag == "umamusu"){
      setboardData(<UmaMusu/>)
    }
    else{
      axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {"blog_type": flag})
      .then((response) => {
          // setBlogList(response.data.body)
          setboardData(<BlogList  data={response.data.body}/>)
      });
    }
  } ,[flag])

    return(
      <>
        <Header setflag={setflag}/>
        <div className="body">
          <div className="main_board">
            {/* ここをステートで管理する */}
            {boardData}
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
