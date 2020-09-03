import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header';


export default class StatusRoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        };
    }

    componentDidMount() {
        axios.get(`http://127.0.0.1:4000/user/room`)
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
                <Container style={styles.container}>
                    <h1 style={styles.h1}>สถานะห้องพัก</h1>

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th style={styles.th}>เลขห้องพัก</th>
                                <th style={styles.th}>สถานะห้องพัก</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.rooms.map((room, index) =>
                                <tr key={index}>
                                    <td style={styles.td}> {room.id} </td>
                                    <td style={styles.td}> {room.room_status} </td>
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
