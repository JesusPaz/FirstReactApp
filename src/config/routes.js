import React, { Component } from 'react';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'
import Home from '../components/Home/Home'
import Users from '../components/User/Users'
import UserInfo from '../components/User/UserInfo'
import NotFound from '../components/NotFound'
import UserInfo2 from '../components/User/UserInfo2'
import Post from '../components/Post/Post'


const routing = (

    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>

                </li>
                <li>
                    <Link to="/users">Users</Link>

                </li>

            </ul>
        </div>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/userapi/:id" component = {UserInfo2}/>
            <Route path = "/user/:id/:name" component = {UserInfo}/>
            <Route path = "/user/:id" component = {UserInfo}/>
            <Route path = "/users" component = {Users}/>
            <Route path = "/post" component = {Post}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
)


export default routing