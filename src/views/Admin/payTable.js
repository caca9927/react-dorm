import React from 'react';
import { Container,Table, Button } from 'react-bootstrap'

const payTable = ({})=>{
    return (
        <div>
             <Container>
                <h1 style={styles.h1}>รายการการแจ้งชำระเงิน</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th style={styles.th}>เลขห้องพัก</th>
                            <th style={styles.th}>ค่าน้ำ</th>
                            <th style={styles.th}>ค่าไฟ</th>
                            <th style={styles.th}>ค่าห้อง</th>
                            <th style={styles.th}>รวมค่าเช่า</th>
                            <th style={styles.th}>สถานะการชำระเงิน</th>
                            <th style={styles.th}>อนุมัติการชำระเงิน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={styles.td}>101</td>
                            <td style={styles.td}>400</td>
                            <td style={styles.td}>1200</td>
                            <td style={styles.td}>2500</td>
                            <td style={styles.td}>4100</td>
                            <td style={styles.td}>ชำระแล้ว</td>
                            <td style={styles.td}><Button variant="danger">อนุมัติ</Button></td>
                        </tr>
                        <tr>
                            <td style={styles.td}>102</td>
                            <td style={styles.td}>400</td>
                            <td style={styles.td}>1200</td>
                            <td style={styles.td}>2500</td>
                            <td style={styles.td}>4100</td>
                            <td style={styles.td}>ชำระแล้ว</td>
                            <td style={styles.td}><Button variant="danger">อนุมัติ</Button></td>
                        </tr>
                        <tr>
                            <td style={styles.td}>103</td>
                            <td style={styles.td}>400</td>
                            <td style={styles.td}>1200</td>
                            <td style={styles.td}>2500</td>
                            <td style={styles.td}>4100</td>
                            <td style={styles.td}>ชำระแล้ว</td>
                            <td style={styles.td}><Button variant="danger">อนุมัติ</Button></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </div>
    )
};

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

export default payTable