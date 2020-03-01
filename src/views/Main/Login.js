import React from 'react';
import { Container } from 'react-bootstrap';
import { Row, Col, Form,Button } from 'react-bootstrap';

const Login = ({ }) => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm></Col>
                    <Col sm>
                        <h1 style={styles.h1}>เข้าสู่ระบบ</h1>
                        <Form style={styles.Form}>
                            <Form.Group>
                                <Form.Label>ชื่อผู้ใช้</Form.Label>
                                <Form.Control type="text" placeholder="username" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>รหัสผ่าน</Form.Label>
                                <Form.Control type="password" placeholder="password" />
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