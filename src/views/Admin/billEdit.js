import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header';

export default class billEdit extends Component {

    constructor(props) {
        super(props)
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            rooms: [],
            water_unit: 0,
            water: 0,
            sum_water: 0,
            elect_unit: 0,
            elect: 0,
            sum_elect: 0,
            rent: '',
            total_rent: 0,
            month: 'มกราคม',
            id_room: '',
            roomdata: {
                room_price: 0
            },
            status: ''
        };

    }



    onChangeStatus(e) {
        this.setState({ status: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        
        const status = {
            status: this.state.status
        }
        if (window.confirm('ยืนยันการแก้ไข'))
        axios.put(`http://127.0.0.1:4000/admin/paylist/` + this.props.match.params.id, status)
            .then(res => {
                console.log(res.data)
                window.location = 'http://localhost:3000/admin/paylist'
            })

    }


    componentDidMount() {
         axios.get(`http://127.0.0.1:4000/admin/paylist/` + this.props.match.params.id)
            .then(async res => {
                console.log(res.data[0].status);
                await this.setState({
                    status: res.data[0].status
                });


            })
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 style={styles.h1}>ระบบคำนวณค่าเช่ารายเดือน</h1>
                    <Row>
                        <Form style={styles.form} onSubmit={this.onSubmit}>

                            <Form.Group as={Col}>
                                <Form.Label>สถานะการชำระ</Form.Label>
                                <Form.Control as="select" value={this.state.status} onChange={this.onChangeStatus} >
                                    <option value="ยังไม่ชำระ">ยังไม่ชำระ</option>
                                    <option value="ชำระแล้ว">ชำระแล้ว</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group style={styles.m}>
                                <Button type="submit" variant="danger" >แก้ไข</Button>
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
    m: {
        marginLeft: 100,
        marginTop: 20
    }
}
