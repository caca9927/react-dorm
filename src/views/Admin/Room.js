import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap'
import axios from 'axios';


export default class Room extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        };
        this.deleteRoom = this.deleteRoom.bind(this);
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/admin/room`)
            .then(res => {
                const rooms = res.data;
                this.setState({ rooms });
                console.log(this.state.rooms)
            })
    }

    deleteRoom(e, id) {
        e.preventDefault();
        axios.delete(`http://127.0.0.1:4000/admin/room/${id}`)
            .then((res) => {
                console.log('Room successfully deleted!')
                window.location = 'http://localhost:3000/admin/room'
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <Container style={styles.container}>
                    <h1 style={styles.h1}>รายการห้องพัก</h1>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={styles.th}>เลขห้องพัก</th>
                                <th style={styles.th}>ราคาห้องพัก</th>
                                <th style={styles.th}>สถานะห้องพัก</th>
                                <th style={styles.th}>แก้ไข</th>
                                <th style={styles.th}>ลบ</th>
                            </tr>
                        </thead>
                        {/* href={"/admin/room/" + room.room_id} */}
                        <tbody>
                            {this.state.rooms.map((room, index) =>
                                <tr key={index}>
                                    <td style={styles.td}> {room.id} </td>
                                    <td style={styles.td}> {room.room_price} </td>
                                    <td style={styles.td}> {room.room_status} </td>
                                    <td style={styles.td}>
                                        <Button variant="info" href={"/admin/room/edit/" + room.id} >แก้ไข</Button>
                                    </td>
                                    <td style={styles.td}><Button variant="danger" onClick={(e) => this.deleteRoom(e, room.id)} >ลบ</Button></td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    เพิ่มรายการห้องพัก >>> <Button variant="success" href="/admin/room/add" >เพิ่ม</Button>
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
