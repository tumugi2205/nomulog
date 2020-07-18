import React, {useState, useEffect} from "react"
import "./App.css"
import Home from '../Home/Home'
import Articles from '../Articles/Articles';
import Diarys from '../Diarys/Diarys';
import Items from '../Items/Items';
import axios from 'axios';
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    // const [blogList, setBlogList] = useState()
    // useEffect(()=>{
    //     axios.post('https://72ib8ngtle.execute-api.ap-northeast-1.amazonaws.com/default/getBlogList', {"blog_type": "all"})
    //     .then((response) => {
    //         setBlogList(response.data.body)
    //     });
    // },[])
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/articles' exact component={Articles}/>
                <Route path='/diarys' exact component={Diarys}/>
                <Route path='/blog_item/:id' exact component={Items}/>
            </Switch>
        </BrowserRouter>
        </>
        );

}

export default App;