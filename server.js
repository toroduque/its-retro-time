const express = require('express')
const socket = require('socket.io')

const app = express()
const server = app.listen(3030)
const io = socket(server)

// Read from directory
app.use(express.static('public'))

console.log('Express Server Running');

const newConnection = socket => {
    console.log('SOCKET => ', socket.id)
}

io.sockets.on('connection', newConnection)







