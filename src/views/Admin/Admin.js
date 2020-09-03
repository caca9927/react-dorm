import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import Room from './Room';
import payBill from './payBill';
import payTable from './payTable';
import Header from './Header';
import roomEdit from './roomEdit';
import roomAdd from './roomAdd';


const Admin = ({})=>{
    return (
        <React.Fragment>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/admin" component={Home}></Route>
                    <Route exact path="/admin/room" component={Room}></Route>
                    <Route exact path="/admin/pay" component={payBill}></Route>
                    <Route exact path="/admin/paylist" component={payTable}></Route>
                    <Route exact path="/admin/room/edit/:id" component={roomEdit}></Route>
                    <Route exact path="/admin/room/add" component={roomAdd}></Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
};


export default Admin