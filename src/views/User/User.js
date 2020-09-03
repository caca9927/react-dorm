import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Pay from './Pay';

import StatusRoom from './StatusRoom';
import TableRent from './TableRent';
import Header from './Header';



const User = ({})=>{
    return (
        <React.Fragment>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/user" component={StatusRoom}></Route>
                    <Route exact path="/user/pay" component={Pay}></Route>
                    <Route exact path="/user/rent" component={TableRent}></Route>
                    
                    

                </Switch>
            </Router>
        </React.Fragment>
    )
};


export default User