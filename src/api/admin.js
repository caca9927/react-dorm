const express = require('express')
const router = express.Router()
const db = require('../config/db')


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
    .post((req, res) => {
        const room = {
            "id": req.body.id,
            "room_price": req.body.room_price,
            "room_status": req.body.room_status
        }
        let sql = 'INSERT INTO room SET ? '
        db.query(sql, room, (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            result = [{ 'id': results.insertId, ...room }]
            return res.json(result)
        })
    })

router.route('/room/:id')
    .all((req, res, next) => {
        let sql = 'SELECT * FROM room WHERE id = ?'
        db.query(sql, [req.params.id], (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            if (results.length === 0) return res.status(400).json({
                "status": 400,
                "message": "Not found room with the given ID"
            })
            res.room = results
            next()
        })
    })
    .get((req, res, next) => {
        return res.json(res.room)
    })
    .put((req, res, next) => {
        let room = {
            "room_price": req.body.roomprice,
            "room_status": req.body.roomstatus
        }
        let sql = 'UPDATE room SET ? WHERE id = ? '
        db.query(sql, [room, req.params.id], (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            if (results.affectedRows > 0) {
                room = Object.assign(res.room[0], room)
            } else {
                room = res.room
            }

            const result = {
                "status": 200,
                "data": res.room
            }
            return res.json(result)
        })
    })
    .delete((req, res, next) => {
        let sql = 'DELETE FROM room WHERE id = ? '
        db.query(sql, [req.params.id], (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })

            const result = {
                "status": 200,
                "data": res.room
            }

            return res.json(result)
        })
    })



module.exports = router