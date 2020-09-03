import React, { Component } from 'react';
import { Container, Table, Button, Image } from 'react-bootstrap'
import check from '../../img/checked.png'
import Header from './Header';
import axios from 'axios';

export default class payTable extends Component {

    constructor(props) {
        super(props)
        this.deleteRent = this.deleteRent.bind(this);
        this.state = {
            rents: []
        };
       
    }

    deleteRent(e, id) {
        e.preventDefault();
        if (window.confirm('ยืนยันการลบ'))
        axios.delete(`http://127.0.0.1:4000/admin/paylist/${id}`)
            .then((res) => {
                window.location = 'http://localhost:3000/admin/paylist'
            }).catch((error) => {
                console.log(error)
            })
    }
    
    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/admin/paylist`)
            .then(res => {
                const rents = res.data;
                this.setState({ rents });
                console.log(this.state.rents)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 style={styles.h1}>รายการค่าเช่ารายเดือน</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={styles.th}>หมายเลขห้องพัก</th>
                                <th style={styles.th}>รวมค่าเช่ารายเดือน</th>
                                <th style={styles.th}>เดือน</th>
                                <th style={styles.th}>สถานะการชำระเงิน</th>
                                <th style={styles.th}>แก้ไข</th>
                                <th style={styles.th}>ลบ</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.rents.map((rent, index) =>
                            <tr key={index}>
                                <td style={styles.td}>{rent.id_room}</td>
                                <td style={styles.td}>{rent.total_rent}</td>
                                <td style={styles.td}>{rent.month}</td>
                                <td style={styles.td}>{rent.status}</td>
                                <td style={styles.td}>
                                        <Button variant="info" href={"/admin/paylist/edit/" + rent.id_rent} >แก้ไข</Button>
                                    </td>
                                    <td style={styles.td}><Button variant="danger" onClick={(e) => this.deleteRent(e, rent.id_rent)} >ลบ</Button></td>
                            </tr>
                             )}
                        </tbody>
                    </Table>
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
        marginBottom: 50,
        textAlign: "center"
    },
    th: {
        textAlign: "center"
    },
    td: {
        textAlign: "center"
    }
}


