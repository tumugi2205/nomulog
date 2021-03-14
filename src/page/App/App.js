import React, {useState, useEffect} from "react"
import "./App.css"
import Home from '../Home/Home'
import Items from '../Items/Items';
import UmaMusu2 from '../UmaMusu2/UmaMusu2'
import { HashRouter, Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/blog_item/:id' exact component={Items}/>
                <Route path='/umamusu' exact component={UmaMusu2}/>
            </Switch>
        </BrowserRouter>
        </>
        );

}

export default App;