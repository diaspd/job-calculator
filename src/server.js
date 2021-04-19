const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

server.set('view engine', 'ejs')

//Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitar aequivos statics
server.use(express.static("public"))

//usar o req body
server.use(express.urlencoded({ extended: true}))

//routes
server.use(routes)

server.listen(5500, () => console.log('rodando'))