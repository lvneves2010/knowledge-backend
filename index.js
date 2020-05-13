const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')

require( './config/mongodb' )
require('dotenv').config();

app.db = db
app.mongoose = mongoose

const port = process.env.PORT || 3000

consign() 
    .include( './config/passport.js' )
    .then( './config/middleware.js' )
    .then( './api/validation.js' )
    .then( './api' )
    .then( './schedule' )
    .then( './config/routes.js' )
    .into(app)

// app.listen(3000, () => {
//     console.log( 'Backend rodando....' )
// })
app.listen(port, () => console.log(` Backend Running on port ${port}`))