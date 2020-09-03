const express = require('express')
const router = express.Router()
const db = require('../config/db')
const jwt = require('jsonwebtoken')

const SECRET = "dast3jqkrs931jrsaclsad";

router.route('/login')
    .post((req, res) => {

        let sql = "SELECT * FROM user WHERE username = ? AND password = ?";

        db.query(sql, [req.body.username, req.body.password], async (err, result) => {
            if (err) return res.json({
                "message": "Internal Server Error",
                "status": 500
            });

            let token = {
                "token": "",
                "status": false
            }

            if (result[0] !== undefined) {
                try {
                    const x = await jwt.sign({ result }, SECRET);
                    token = {
                        "token": x,
                        "status": true
                    }
                } catch (ex) {
                    throw ex
                }
            }
            res.json(token);

        })
    });

router.route('/room/:id')
    .get((req, res) => {
        let sql = "SELECT * FROM room WHERE id = ?";
        db.query(sql, [req.params.id], (err, result) => {
            if (err) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            res.json(result);
        });
    })
router.route('/room')
    .get((req, res, next) => {
        let sql = 'SELECT * FROM room'
        db.query(sql, (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            return res.json(results)
        })
    })

router.route('/user-data')
    .get((req, res, next) => {
        let sql = 'SELECT * FROM user'
        db.query(sql, (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            return res.json(results)
        })
    })
    .post((req, res) => {
        const user = {
            "user_name": req.body.user_name,
            "user_idcard": req.body.user_idcard,
            "user_phone": req.body.user_phone,
            "user_address": req.body.user_address,
            "username": req.body.username,
            "password": req.body.password,
            "id_room": req.body.id_room
        }
        let sql = 'INSERT INTO user  SET ? '
        db.query(sql, user, (error) => {
            if (error) throw error;

            db.query("UPDATE room SET room_status = 'ไม่ว่าง' WHERE id = ? ", [req.body.id_room], (err, result) => {
                if (err) throw err;

                return res.json(result);
            })
        })
    })

router.route('/rent')
    .get((req, res, next) => {
        let sql = 'SELECT * FROM rent'
        db.query(sql, (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            return res.json(results)
        })
    })

router.route('/rent/:id')
    .get((req, res) => {
        let sql = 'SELECT * FROM rent WHERE id_room = ?';
        db.query(sql, [req.params.id], (err, result) => {
            if(err) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            res.json(result)
        });
    })


module.exports = router