import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './views/Admin/Home';
import Room from './views/Admin/Room';
import payBill from './views/Admin/payBill';
import payTable from './views/Admin/payTable';
import roomEdit from './views/Admin/roomEdit';
import roomAdd from './views/Admin/roomAdd';
import billEdit from './views/Admin/billEdit'

import Pay from './views/User/Pay';

import StatusRoom from './views/User/StatusRoom';
import TableRent from './views/User/TableRent';


import Login from './views/Main/Login';
import Signup from './views/Main/Signup';


import Logout from './views/Logout';
function App() {
  return (
    <div style={styles.main}>
      <Router>
        <Switch>
          <Route exact path="/admin" component={Home}></Route>
          <Route exact path="/admin/room" component={Room}></Route>
          <Route exact path="/admin/pay" component={payBill}></Route>
          <Route exact path="/admin/paylist" component={payTable}></Route>
          <Route exact path="/admin/room/edit/:id" component={roomEdit}></Route>
          <Route exact path="/admin/paylist/edit/:id" component={billEdit}></Route>
          <Route exact path="/admin/room/add" component={roomAdd}></Route>
          <Route exact path="/user" component={StatusRoom}></Route>
          
          <Route exact path="/user/pay" component={Pay}></Route>
          <Route exact path="/user/rent" component={TableRent}></Route>
        
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/logout" component={Logout}></Route>
        </Switch>
      </Router>
    </div>
  );
}

const styles = {
  main: {
    fontFamily: "Kanit"
  }
}

export default App;
