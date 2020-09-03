import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios';
import Header from './Header';

export default class Pay extends Component {


    render() {
        return (
            <div>
                <Header />
                <Container>
                    <h1 style={styles.h1}>แจ้งชำระค่าเช่ารายเดือน</h1>
                    <Row>
                        <Form style={styles.form}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>ห้อง</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>ค่าเช่ารายเดือน</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>เดือน</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>วัน/เดือน/ปีที่ชำระ</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label>จำนวนเงินที่โอน</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>หลักฐานการโอนหรือสลิปการโอน</Form.Label>
                                    <Form.Control style={{display: 'none'}} type="file" ref={fileInput => this.fileInput = fileInput} />
                                    <br/>
                                    <Button variant="warning" onClick={() => this.fileInput.click()}>เลือกรูปภาพ</Button>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group style={styles.m}>
                                <Button variant="success">แจ้งการชำระเงิน</Button>
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
        marginLeft:295,
        marginTop: 20
    }
}
