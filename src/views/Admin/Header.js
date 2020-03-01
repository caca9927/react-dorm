import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
            <div>
                <Navbar bg="primary" variant="dark" >
                    <Nav className="mr-auto" style={styles.a}>
                        <Nav.Link href="/admin">หน้าหลัก</Nav.Link>
                        <Nav.Link href="/admin/room">ห้องพัก</Nav.Link>
                        <Nav.Link href="/admin/pay">ระบบคำนวณค่าเช่า</Nav.Link>
                        <Nav.Link href="/admin/payList">รายการแจ้งชำระ</Nav.Link> 
                        <Nav.Link href="/admin/logout">ออกจากระบบ</Nav.Link>  
                    </Nav>
                </Navbar>
            </div>
    )
};

const styles = {
    a: {
        fontSize: "16pt",
        color: "white"
    }
}




export default Header