import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
            <div>
                <Navbar bg="primary" variant="dark" >
                    <Nav className="mr-auto" style={styles.a}>
                        <Nav.Link href="/login">เข้าสู่ระบบ</Nav.Link>
                        <Nav.Link href="/signup">สมัครสมาชิก</Nav.Link>
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