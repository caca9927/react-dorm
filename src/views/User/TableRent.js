import React, { Component } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header';
import { decode } from 'jsonwebtoken';

export default class TableRent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rents: []
        };
    }

    componentDidMount() {
        
        if(localStorage.getItem("room-token")){
            console.log(decode(localStorage.getItem("room-token")).result[0].id_room);
            
            axios.get(`http://127.0.0.1:4000/user/rent/${decode(localStorage.getItem("room-token")).result[0].id_room}`)
                .then(res => {
                    console.log(res.data);
                    
                    const rents = res.data;
                    this.setState({ rents });
                    // console.log(this.state.rents)
                })
        }

    }

    render() {
        return (
            <div>
                <Header />
                <Container style={styles.container}>
                    <h1 style={styles.h1}>รายการค่าเช่ารายเดือน</h1>

                    <Table striped bordered hover>
                        <thead>

                            <tr>
                                <th style={styles.th}>ค่าห้องพัก</th>
                                <th style={styles.th}>ค่ำน้ำ</th>
                                <th style={styles.th}>ค่ำไฟ</th>
                                <th style={styles.th}>รวมค่าเช่า</th>
                                <th style={styles.th}>เดือน</th>
                                <th style={styles.th}>สถานะการชำระเงิน</th>

                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rents.map((rent, index) =>
                                <tr key={index}>
                                    <td style={styles.td}>{rent.rent}</td>
                                    <td style={styles.td}>{rent.sum_water}</td>
                                    <td style={styles.td}>{rent.sum_elect}</td>
                                    <td style={styles.td}>{rent.total_rent}</td>
                                    <td style={styles.td}>{rent.month}</td>
                                    <td style={styles.td}>{rent.status}</td>

                                </tr>
                            )}
                        </tbody>
                    </Table>
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
        marginBottom: 50,
        textAlign: "center"
    },
    th: {
        textAlign: "center"
    },
    td: {
        textAlign: "center"
    },
    container: {
        marginBottom: 50
    }
}
