import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';


class Header extends Component{

    render(){
        return(
            <div>
                <Navbar bg="primary" variant="dark" >
                    <Nav className="mr-auto" style={styles.a}>
                        <Nav.Link href="/user">หน้าหลัก</Nav.Link>
                        <Nav.Link href="/user/rent">รายการค่าเช่ารายเดือน</Nav.Link>
                        <Nav.Link href="/logout">ออกจากระบบ</Nav.Link>   
                    </Nav>
                </Navbar>
            </div>
        )
    };
}


const styles = {
    a: {
        fontSize: "16pt",
        color: "white"
    }
}




export default Header