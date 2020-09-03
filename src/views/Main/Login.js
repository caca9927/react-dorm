import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { decode } from 'jsonwebtoken';
import axios from 'axios';
import { Row, Col, Form,Button } from 'react-bootstrap';
import Header from './Header';

const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async e => {
        e.preventDefault();

        let data = {
            username: username.value,
            password: password.value
        }
        
        await axios.post('http://localhost:4000/user/login', data)
        .then(res => {
            
            if(res.data.status){
                localStorage.setItem("room-token", res.data.token);
                
                decode(localStorage.getItem("room-token")).result[0].username === "admin"? props.history.push('/admin/room'): props.history.push('/user') 
                
            }else{
                alert("Username or Password ไม่ถูกต้อง");
            }
        })
    }

    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col sm></Col>
                    <Col sm>
                        <h1 style={styles.h1}>เข้าสู่ระบบ</h1>
                        <Form style={styles.Form} onSubmit={onSubmit} >
                            <Form.Group>
                                <Form.Label>ชื่อผู้ใช้</Form.Label>
                                <Form.Control type="text" placeholder="username" ref={e => setUsername(e)} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>รหัสผ่าน</Form.Label>
                                <Form.Control type="password" placeholder="password" ref={e => setPassword(e)} />
                            </Form.Group>
                            <Button variant="primary" type="submit">เข้าสู่ระบบ</Button>
                        </Form>
                    </Col>
                    <Col sm></Col>
                </Row>
            </Container>
        </div>
    )
};

const styles = {
    h1:{
        marginTop: 50,
        textAlign: "center"
    },
    Form:{
        margin: "auto",
        marginBottom: 50,
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        backgroundImage: "linear-gradient(#8BFFFF, #06DCDC)"
    }
}


export default Login