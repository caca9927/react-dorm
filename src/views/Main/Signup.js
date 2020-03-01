import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'



export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserIDcard = this.onChangeUserIDcard.bind(this);
        this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            IDcard: '',
            phone: '',
            address: '',
            username: '',
            password: ''
        }
    }

    onChangeUserName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeUserIDcard(e) {
        this.setState({ IDcard: e.target.value })
    }
    onChangeUserPhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangeUserAddress(e) {
        this.setState({ address: e.target.value })
    }
    onChangeUserUsername(e) {
        this.setState({ username: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.prevenDefault()

        console.log(`User successfully created!`);
        console.log(`${this.state.name}`);
        console.log(`${this.state.IDcard}`);
        console.log(`${this.state.phone}`);
        console.log(`${this.state.address}`);
        console.log(`${this.state.username}`);
        console.log(`${this.state.password}`);
    }
    render() {
        return (
            <div>
                <Container>
                    <h1 style={styles.h1}>สมัครสมาชิก</h1>
                    <Row>
                        <Form onSubmit={this.onSubmit} style={styles.form}>
                            <Col style={styles.n}>
                                <Form.Group>
                                    <Form.Label>ชื่อ-นามสกุล</Form.Label>
                                    <Form.Control type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeUserName} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>เลขบัตรประชาชน</Form.Label>
                                    <Form.Control type="text" placeholder="ID Card Number" value={this.state.IDcard} onChange={this.onChangeUserIDcard} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" value={this.state.phone} onChange={this.onChangeUserPhone} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>ที่อยู่</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Address" value={this.state.address} onChange={this.onChangeUserAddress} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>ชื่อผู้ใช้</Form.Label>
                                    <Form.Control type="text" placeholder="Username" value={this.state.username} onChange={this.onChangeUserUsername} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>รหัสผ่าน</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.onChangeUserPassword} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>เข้าสู่ระบบ <a href="/login">กดที่นี่</a></Form.Label>
                                </Form.Group>
                                <Button variant="primary" type="submit" >สมัครสมาชิก</Button>

                            </Col>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
}


const styles = {
    n: {
        marginTop: 20
    },
    h1: {
        marginTop: 50,
        textAlign: "center"
    },
    form:{
        margin: "auto",
        marginBottom: 50,
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        backgroundImage: "linear-gradient(#8BFFFF, #06DCDC)"
    }
}
