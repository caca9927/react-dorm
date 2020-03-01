import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class roomAdd extends Component {

    constructor(props) {
        super(props)

       
        this.onChangeRoomPrice = this.onChangeRoomPrice.bind(this)
        this.onChangeRoomStatus = this.onChangeRoomStatus.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            id: '',
            room_price: '',
            room_status: ''
        }
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/admin/room/` + this.props.match.params.id)
            .then(res => {
                console.log(res.data);
              this.setState({
                  id: res.data.id,
                  room_price: res.data.room_price,
                  room_status: res.data.room_status
              });

            })
            .catch((error) => {
                console.log(error);
            })
    }

    

    onChangeRoomPrice(e) {
        this.setState({ room_price: e.target.value })
    }

    onChangeRoomStatus(e){
        this.setState({ room_status: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault()

        const roomObject = {
            room_price: this.state.room_price,
            room_status: this.state.room_status
        };

        axios.put(`http://127.0.0.1:4000/admin/room/` + this.props.match.params.id, roomObject)
            .then(res => {
                console.log(res.data)
            })

    

    }

    render() {
        return (
            <div>
                <Container style={styles.container}>
                    <h1 style={styles.h1}>เพิ่มรายการห้องพัก</h1>
                   
                            <Form style={styles.form} onSubmit={this.onSubmit}>

                                
                                    <Form.Group as={Col} controlId="id" >
                                        <Form.Label>หมายเลขห้องพัก</Form.Label>
                                        <Form.Control type="text" value={this.state.id} disabled />
                                        
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Label>ราคาห้องพัก</Form.Label>
                                        <Form.Control type="text" value={this.state.room_price} onChange={this.onChangeRoomPrice} />
                                    </Form.Group>
                               
                                
                                    <Form.Group as={Col}>
                                        <Form.Label>สถานะห้องพัก</Form.Label>
                                        <Form.Control as="select" value={this.state.room_status} onChange={this.onChangeRoomStatus} >
                                            <option value="ว่าง">ว่าง</option>
                                            <option value="ไม่ว่าง">ไม่ว่าง</option>
                                        </Form.Control>
                                    </Form.Group>
                                
                                <Form.Group style={styles.m}>
                                    <Button variant="success" type="submit">แก้ไข</Button>
                                </Form.Group>

                            </Form>
                   
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
    m: {
        marginLeft: 190,
        marginTop: 20
    },
    container: {
        marginBottom: 50
    }
}