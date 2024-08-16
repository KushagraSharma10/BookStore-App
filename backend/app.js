const express = require("express")
const app = express()
require("dotenv").config()
const db = require("./config/mongoose-connection")
const bookRouter = require("./routes/bookRouter")
const cors = require("cors")

app.use(cors(
    {
        origin: ["http://BookStore-App-1whq.vercel.app"],
        credentials: true,
        methods:["POST", "GET", "DELETE","PUT"]
    }
))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))  // for parsing application/x-www-form-urlencoded

app.use("/books", bookRouter)

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`The server is running at ${PORT}`) )