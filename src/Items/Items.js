import React, {useState, useEffect} from "react"
import Title from '../Title/Title';
import "./Items.css"
import axios from 'axios';
import useReactRouter from 'use-react-router';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism } from "react-syntax-highlighter"
import coy from "react-syntax-highlighter/dist/cjs/styles/prism/coy"

const PrismRender = ({value, language}) => (
  <Prism language={language} style={coy}>{value}</Prism>
)

const Items = () => {
  const { match } = useReactRouter();
  const id = match.params.id
  var [itemInit, setitemInit] = useState("<div class='loading'>Loading...</div>")
  useEffect(()=>{
    console.log("in")
    axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogData', {"id":id})
    .then((response) => {
      console.log(response.data.body)
      setitemInit(response.data.body)
    });
  },[])
  console.log("load")
  return (
    <div className="blog_body">
      {/* <div dangerouslySetInnerHTML={{__html: itemInit}}/> */}
      <ReactMarkdown
          source={itemInit}
          escapeHtml={false}
          renderers={{code: PrismRender}} 
      />
    </div>
    );
}

export default Items;