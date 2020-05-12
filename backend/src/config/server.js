const port = 3003

const bodyparser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyparser.urlencoded({extend: true}))
server.use(bodyparser.json())

server.listen(port, function(){
  console.log('rodando na porta 3003')
})

module.exports = server