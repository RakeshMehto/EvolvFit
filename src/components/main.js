import React, { Component} from 'react';
import Nav from './Navibar';
import Home from './firstpage';
import UserLogin from './userlogin';
import AdminLogin from './adminlogin';
import User from './usercomponent';
import Admin from './admincomponent';
import {Switch, Route, Redirect} from 'react-router-dom';
class Main extends Component{
    render(){


        return(
            <div>
                <Nav />
            <Switch>
                <Route path='/home' component={Home} />
                <Route exact path='/userlogin' component={UserLogin} />
                <Route exact path='/adminlogin' component={AdminLogin} />
                <Route exact path='/userPage' component={User} />
                <Route exact path='/adminPage' component={Admin} />
                <Redirect to="/home" />
            </Switch>
            </div>
        );
    }
}
export default Main;