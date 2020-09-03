import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header';

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserIDcard = this.onChangeUserIDcard.bind(this);
        this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            user_name: '',
            user_idcard: '',
            user_phone: '',
            user_address: '',
            username: '',
            password: '',
            id_room: '',
            rooms: []
        }
    }

    async componentDidMount() {
        await axios.get(`http://127.0.0.1:4000/user/room`)
            .then(async res => {
                const rooms = res.data;
                this.setState({ rooms });
                console.log(this.state.rooms)
            })
    }

    onChangeUserName(e) {
        this.setState({ user_name: e.target.value })
    }
    onChangeUserIDcard(e) {
        this.setState({ user_idcard: e.target.value })
    }
    onChangeUserPhone(e) {
        this.setState({ user_phone: e.target.value })
    }
    onChangeUserAddress(e) {
        this.setState({ user_address: e.target.value })
    }
    onChangeUserUsername(e) {
        this.setState({ username: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangeRoom(e) {
        this.setState({ id_room: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();

        const userObject = {
            user_name: this.state.user_name,
            user_idcard: this.state.user_idcard,
            user_phone: this.state.user_phone,
            user_address: this.state.user_address,
            username: this.state.username,
            password: this.state.password,
            id_room: this.state.id_room
        };

        axios.post(`http://127.0.0.1:4000/user/user-data`, userObject)
            .then(res => {
                // console.log(res.data);
                this.props.history.push('/login')
            });

    }
    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 style={styles.h1}>สมัครสมาชิก</h1>
                    <Row>
                        <Form onSubmit={this.onSubmit} style={styles.form}>
                            <Col style={styles.n}>
                                <Form.Group>
                                    <Form.Label>ชื่อ-นามสกุล</Form.Label>
                                    <Form.Control type="text" placeholder="Name" value={this.state.user_name} onChange={this.onChangeUserName} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>เลขบัตรประชาชน</Form.Label>
                                    <Form.Control type="text" placeholder="ID Card Number" maxLength="13" value={this.state.user_idcard} onChange={this.onChangeUserIDcard} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                    <Form.Control type="text" placeholder="Phone Number" maxLength="10" value={this.state.user_phone} onChange={this.onChangeUserPhone} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>ที่อยู่</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Address" value={this.state.user_address} onChange={this.onChangeUserAddress} />
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
                                    <Form.Label>ห้องพัก</Form.Label>

                                    <Form.Control as="select" value={this.state.id_room} onChange={this.onChangeRoom}>
                                        {this.state.rooms.map(room => (
                                            <option key={room.id} value={room.id}>{room.id}</option>

                                        ))}
                                    </Form.Control>

                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>เข้าสู่ระบบ <a href="/login">กดที่นี่</a></Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="primary" type="submit" >สมัครสมาชิก</Button>
                                </Form.Group>


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
    form: {
        margin: "auto",
        marginBottom: 50,
        marginTop: 20,
        padding: 20,
        borderRadius: 15,
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        backgroundImage: "linear-gradient(#8BFFFF, #06DCDC)"
    }
}
