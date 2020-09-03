var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 4000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))

var Admin = require('./api/admin')
var User = require('./api/user')


app.use('/user',User)
app.use('/admin',Admin)



app.listen(port, () => {
    console.log("Server is running on port: " + port)
})