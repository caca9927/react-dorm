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

router.route('/pay')
    .post((req, res) => {
        let bill = {
            water_unit: req.body.water_unit,
            water: req.body.water,
            sum_water: req.body.sum_water,
            elect_unit: req.body.elect_unit,
            elect: req.body.elect,
            sum_elect: req.body.sum_elect,
            rent: req.body.rent,
            total_rent: req.body.total_rent,
            month: req.body.month,
            id_room: req.body.id_room,
            status: 'ยังไม่ชำระ'

        }
        console.log(bill);

        let sql = 'INSERT INTO rent SET ?'
        db.query(sql, bill, (error, results) => {
            if (error) throw error
            return res.json(results)
        })
    })

router.route('/paylist')
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

        console.log(req.body);

        let room = {
            "room_price": req.body.room_price,
            "room_status": req.body.room_status
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

router.route('/paylist/:id')
    .all((req, res, next) => {
        let sql = 'SELECT * FROM rent WHERE id_rent = ?'
        db.query(sql, [req.params.id], (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            if (results.length === 0) return res.status(400).json({
                "status": 400,
                "message": "Not found bill with the given ID"
            })
            res.rent = results
            next()
        })
    })
    .get((req, res, next) => {
        return res.json(res.rent)
    })
    .put((req, res, next) => {

        console.log(req.body);

        let rent = {
            status: req.body.status
        }
        let sql = 'UPDATE rent SET ? WHERE id_rent = ? '
        db.query(sql, [rent, req.params.id], (error, results, fields) => {
            if (error) return res.status(500).json({
                "status": 500,
                "message": "Internal Server Error"
            })
            if (results.affectedRows > 0) {
                rent = Object.assign(res.rent[0], rent)
            } else {
                rent = res.rent
            }

            const result = {
                "status": 200,
                "data": res.rent
            }
            return res.json(result)
        })
    })
    .delete((req, res, next) => {
        let sql = 'DELETE FROM rent WHERE id_rent = ? '
        db.query(sql, [req.params.id], (error, results, fields) => {
            if (error) throw error

            const result = {
                "status": 200,
                "data": res.rent
            }

            return res.json(result)
        })
    })


module.exports = router