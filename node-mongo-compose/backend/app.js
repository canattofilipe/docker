const express = require('express')
const restfull = require('node-restful')
const server = express()
const mongoose = restfull.mongoose

// Databse
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Teste
server.get('/', (req, res, next) => res.send('Backend'))

// Start server
server.listen(3000)