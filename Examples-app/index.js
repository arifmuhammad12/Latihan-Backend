const http = require('http')
const api = require('./bin/api/server')
const port = process.env.PORT

const server = http.createServer(api)

server.listen(port, () => {
    console.log("berhasil")
})