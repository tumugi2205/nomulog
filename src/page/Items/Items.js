import React, {useState, useEffect} from "react"
import "./Items.css"
import axios from 'axios';
import useReactRouter from 'use-react-router';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism } from "react-syntax-highlighter"
import coy from "react-syntax-highlighter/dist/cjs/styles/prism/coy"
import Header from '../../component/Header/Header';
import Tags from '../../component/Tags/Tags'
import Footer from '../../component/Footer/Footer'
import BuckNumber from '../../component/BuckNumber/BuckNumber'
import Twitter from '../../component/Twitter/Twitter'

const PrismRender = ({value, language}) => (
  <Prism language={language} style={coy}>{value}</Prism>
)

const Items = () => {
  const { match } = useReactRouter();
  const blog_id = match.params.id
  var [itemInit, setitemInit] = useState('<div className="loading_icon"><div className="dot-pulse"></div></div>')
  useEffect(()=>{
    axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogData', {"id":blog_id})
    .then((response) => {
      setitemInit(response.data.body)
    });
  },[])
  console.log("load")
  return (
    <div className="blog_body">
      {/* <div dangerouslySetInnerHTML={{__html: itemInit}}/> */}
      <>
        <Header/>
        <div className="body">
          <div className="main_board">
          <ReactMarkdown
            source={itemInit}
            escapeHtml={false}
            renderers={{code: PrismRender}} 
          />
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
    </div>
    );
}

export default Items;