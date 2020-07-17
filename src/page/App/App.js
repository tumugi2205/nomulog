import React, {useState, useEffect} from "react"
import "./App.css"
import Home from '../Home/Home'
import Articles from '../Articles/Articles';
import Items from '../Items/Items';
import axios from 'axios';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    const [blogList, setBlogList] = useState()
    useEffect(()=>{
        axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {})
        .then((response) => {
            setBlogList(response.data.body)
        });
    },[])
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/blog_list' exact component={Articles}/>
                <Route path='/blog_item/:id' exact component={Items}/>
            </Switch>
        </BrowserRouter>
        </>
        );

}

export default App;