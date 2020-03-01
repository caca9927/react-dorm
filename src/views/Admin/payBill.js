import React,{ Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';

export default class payBill extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        };
       
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/admin/room`)
            .then(res => {
                const rooms = res.data;
                this.setState({ rooms });
                console.log(this.state.rooms)
            })
    }


    render() {
        return (
            <div>
                <Container>
                    <h1 style={styles.h1}>ระบบคำนวณค่าเช่ารายเดือน</h1>
                    <Row>
                        <Form style={styles.form}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ห้องพัก</Form.Label>
                                   
                                    <Form.Control as="select">
                                    {this.state.rooms.map((room, index) =>
                                        <option key={index} value={room.id}>{room.id} </option>
                                        
                                        )}
                                    </Form.Control>
                                     
                                </Form.Group>
    
                                <Form.Group as={Col}>
                                    <Form.Label>วัน/เดือน/ปี</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าน้ำต่อหน่วย</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
    
                                <Form.Group as={Col}>
                                    <Form.Label>จำนวนหน่วยที่ใช้</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าไฟต่อหน่วย</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
    
                                <Form.Group as={Col}>
                                    <Form.Label>จำนวนหน่วยที่ใช้</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group style={styles.m}>
                                <Button variant="success">คำนวณ</Button>
                            </Form.Group>
                        </Form>
                    </Row>
                </Container>
            </div>
        )
    }
    
};

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
    }
}
