import React, {useState, useEffect} from "react"
import './Diarys.css';
import Header from '../../component/Header/Header';
import Tags from '../../component/Tags/Tags'
import Footer from '../../component/Footer/Footer'
import BuckNumber from '../../component/BuckNumber/BuckNumber'
import BlogList from '../../component/BlogList/BlogList'
import Twitter from '../../component/Twitter/Twitter'
import Layout from '../../component/Layout/Layout'
import axios from 'axios';

const Diarys = () => {
  const [blogList, setBlogList] = useState()
  useEffect(()=>{
      axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {"blog_type": "diary"})
      .then((response) => {
          setBlogList(response.data.body)
      });
  },[])
    return(
      <Layout>
        <BlogList  data={blogList}/>
      </Layout>
    )
}

export default Diarys;

