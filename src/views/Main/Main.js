import React, {Component} from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import About from './About';
import Header from './Header';

class Main extends Component{
    render(){
        return (
            <React.Fragment>
                <Header />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Route exact path="/signup" component={Signup}></Route>
                        <Route exact path="/about" component={About}></Route>
                    </Switch>
                </Router>
            </React.Fragment>
        )
    }
};


export default Main