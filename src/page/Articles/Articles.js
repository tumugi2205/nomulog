import React, {useState, useEffect} from "react"
import './Articles.css';
import Header from '../../component/Header/Header';
import Tags from '../../component/Tags/Tags'
import Footer from '../../component/Footer/Footer'
import BuckNumber from '../../component/BuckNumber/BuckNumber'
import BlogList from '../../component/BlogList/BlogList'
import Twitter from '../../component/Twitter/Twitter'
import axios from 'axios';

const Articles = () => {
  const [blogList, setBlogList] = useState()
  useEffect(()=>{
      axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {"blog_type": "blog"})
      .then((response) => {
          setBlogList(response.data.body)
      });
  },[])
    return(
      <>
        <Header/>
        <div className="body">
          <div className="main_board">
              <BlogList  data={blogList}/>
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

export default Articles;

