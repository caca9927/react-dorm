import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class roomAdd extends Component{

    constructor(props){
        super(props)

        this.onChangeRoomId = this.onChangeRoomId.bind(this)
        this.onChangeRoomPrice = this.onChangeRoomPrice.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            id: '',
            room_price: '',
            room_status: 'ว่าง'
        }
    }

    onChangeRoomId(e) {
        this.setState({id: e.target.value})
    }

    onChangeRoomPrice(e){
        this.setState({room_price: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const roomObject = {
            id : this.state.id,
            room_price : this.state.room_price,
            room_status : this.state.room_status
        };

        axios.post(`http://127.0.0.1:4000/admin/room` , roomObject)
            .then(res => console.log(res.data));
            window.location='http://localhost:3000/admin/room'
        this.setState({
            id: '',
            room_price: '',
            room_statust: 'ว่าง'
        });
    }

    render() {
        return(
            <div>
                <Container style={styles.container}>
                <h1 style={styles.h1}>เพิ่มรายการห้องพัก</h1>
                <Row>
                    <Form style={styles.form} onSubmit={this.onSubmit}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>หมายเลขห้องพัก</Form.Label>
                                <Form.Control type="text" value={this.state.id} onChange={this.onChangeRoomId} />
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Form.Label>ราคาห้องพัก</Form.Label>
                                <Form.Control type="text" value={this.state.room_price} onChange={this.onChangeRoomPrice} />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group style={styles.m}>
                            <Button variant="success" type="submit">เพิ่มรายการ</Button>
                        </Form.Group>
                    </Form>
                </Row>
            </Container>
            </div>
        );
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
    },
    m:{
        marginLeft: 190,
        marginTop:20
    },
    container: {
        marginBottom : 50
    }
}