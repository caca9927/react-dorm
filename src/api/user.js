const express = require('express')
const router = express.Router()
const db = require('../config/db')

router.route('/users')
    .get((req,res, next) => {
        let sql = 'SELECT * FROM user'
       
    })
