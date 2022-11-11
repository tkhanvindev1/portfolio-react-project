const axios = require("axios")
const express = require("express")

const PORT = 3000;

const server = express();


server.listen(PORT, '127.0.0.1', () => {
    console.log(`SERVER RUNNING AT PORT ${PORT}`)
})

server.get("/", (req,res) => {
    res.send("Hello There")
})


axios
.get("https://reqres.in//api/users?page=2")
.then((res) => {
    console.log(res.firstname)
})

.catch((err) => {
    console.log(err)
})