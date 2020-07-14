import React, {useState, useEffect} from "react"
import '../Title/Title'
import Title from '../Title/Title';
import BlogList from '../BlogList/BlogList';
import Items from '../Items/Items';
import axios from 'axios';
import { HashRouter, Router, Route } from 'react-router-dom';

const App = () => {
    const [blogList, setBlogList] = useState()
    useEffect(()=>{
        console.log("in")
        axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {})
        .then((response) => {
            console.log(response.data.body)
            setBlogList(response.data.body)
        });
    },[])
    console.log("load")
    return (
        <>
        <HashRouter>
            <Title/>
                <Route path='/' exact render={() => <BlogList data={blogList}/>}/>
                <Route path='/blog_item/:id' exact component={Items}/>
        </HashRouter>
        </>
        );

}

export default App;