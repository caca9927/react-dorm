import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header';

export default class payBill extends Component {

    constructor(props) {
        super(props)

        this.onChangeWaterUnit = this.onChangeWaterUnit.bind(this);
        this.onChangeWater = this.onChangeWater.bind(this);
        this.onChangeElectunit = this.onChangeElectunit.bind(this);
        this.onChangeElect = this.onChangeElect.bind(this);
        this.onChangeTotalRent = this.onChangeTotalRent.bind(this);
        this.onChangeMonth = this.onChangeMonth.bind(this);
        this.onChangeRent = this.onChangeRent.bind(this);
        this.onChangeIdRoom = this.onChangeIdRoom.bind(this);
        this.onChangeSumWater = this.onChangeSumWater.bind(this);
        this.onChangeSumElect = this.onChangeSumElect.bind(this);
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
            }
        };

    }

    async onChangeWaterUnit(e) {
        await this.setState({ water_unit: e.target.value })
    }

    async onChangeWater(e) {
        await this.setState({ water: e.target.value });
    }

    onChangeElectunit(e) {
        this.setState({ elect_unit: e.target.value })
    }

    onChangeElect(e) {
        this.setState({ elect: e.target.value })
    }

    onChangeMonth(e) {
        this.setState({ month: e.target.value })
    }

    onChangeRent(e) {
        this.setState({ rent: e.target.value })
    }

    onChangeIdRoom(e) {
        this.setState({ id_room: e.target.value })
    }

    onChangeSumWater(e) {
        this.setState({ sum_water: e.target.value })
    }

    onChangeSumElect(e) {
        this.setState({ sum_elect: e.target.value })
    }

    onChangeTotalRent(e) {
        this.setState({ total_rent: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const bill = {
            water_unit: this.state.water_unit,
            water: this.state.water,
            elect_unit: this.state.elect_unit,
            elect: this.state.elect,
            rent: this.state.rent,
            sum_elect: this.state.sum_elect,
            sum_water: this.state.sum_water,
            month: this.state.month,
            total_rent: this.state.total_rent,
            id_room: this.state.id_room
        }
        // console.log(bill);
        
        axios.post(`http://127.0.0.1:4000/admin/pay`, bill)
            .then(res => console.log(res.data));
            window.location = 'http://localhost:3000/admin/paylist'

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
                <Header />
                <Container>
                    <h1 style={styles.h1}>ระบบคำนวณค่าเช่ารายเดือน</h1>
                    <Row>
                        <Form style={styles.form} onSubmit={this.onSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ห้องพัก</Form.Label>

                                    <Form.Control as="select" onChange={e => {
                                        let id = e.target.value;
                                        axios.get(`http://localhost:4000/user/room/${id}`)
                                            .then(async res => {
                                                console.log(res.data);
                                                await this.setState({
                                                    roomdata: res.data[0],
                                                    id_room: id,
                                                    rent: res.data[0].room_price
                                                });
                                            })
                                            
                                    }}>
                                        {this.state.rooms.map((room, index) =>
                                            <option key={index} value={room.id}>{room.id} </option>

                                        )}
                                    </Form.Control>
                                    
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าห้องพัก</Form.Label>
                                    <Form.Control type="text" disabled value={this.state.roomdata.room_price} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>เดือน</Form.Label>

                                    <Form.Control as="select" value={this.state.month} onChange={this.onChangeMonth}>
                                        <option value="มกราคม">มกราคม</option>
                                        <option value="กุมภาพันธ์">กุมภาพันธ์</option>
                                        <option value="มีนาคม">มีนาคม</option>
                                        <option value="เมษายน">เมษายน</option>
                                        <option value="พฤษภาคม">พฤษภาคม</option>
                                        <option value="มิถุนายน">มิถุนายน</option>
                                        <option value="กรกฎาคม">กรกฎาคม</option>
                                        <option value="สิงหาคม">สิงหาคม</option>
                                        <option value="กันยายน">กันยายน</option>
                                        <option value="ตุลาคม">ตุลาคม</option>
                                        <option value="พฤษจิกายน">พฤษจิกายน</option>
                                        <option value="ธันวาคม">ธันวาคม</option>
                                    </Form.Control>

                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าน้ำต่อหน่วย</Form.Label>
                                    <Form.Control type="text" onChange={e => this.setState({water: e.target.value})} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>จำนวนหน่วยที่ใช้</Form.Label>
                                    <Form.Control type="text" onChange={e => this.setState({water_unit: e.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าน้ำรวม</Form.Label>
                                    <Form.Control type="text" disabled value={this.state.sum_water}  />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าไฟต่อหน่วย</Form.Label>
                                    <Form.Control type="text"  onChange={e => this.setState({elect: e.target.value})} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>จำนวนหน่วยที่ใช้</Form.Label>
                                    <Form.Control type="text"onChange={e => this.setState({elect_unit: e.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าไฟรวม</Form.Label>
                                    <Form.Control type="text" disabled value={this.state.sum_elect} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าเช่ารวม</Form.Label>
                                    <Form.Control type="text" disabled value={this.state.total_rent} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group style={styles.m}>
                                <Button variant="success" onClick={async e => {
                                    await this.setState(prevState => ({
                                        sum_water : prevState.water_unit * prevState.water,
                                        sum_elect : prevState.elect_unit * prevState.elect
                                    }));

                                    await this.setState(prevState => ({
                                        total_rent: prevState.roomdata.room_price + prevState.sum_elect + prevState.sum_water
                                    }))
                                }} >คำนวณ</Button>
                                <Button type="submit" variant="danger" >ยืนยันการคำนวณ</Button>
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
        marginLeft: 190,
        marginTop: 20
    }
}
