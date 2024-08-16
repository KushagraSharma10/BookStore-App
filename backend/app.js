const express = require("express")
const app = express()
require("dotenv").config()
const db = require("./config/mongoose-connection")
const bookRouter = require("./routes/bookRouter")
const cors = require("cors")

app.use(cors())  // for cross-origin resource sharing (CORS)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))  // for parsing application/x-www-form-urlencoded

app.use("/books", bookRouter)

const PORT = process.env.PORT

app.listen(PORT, ()=> console.log(`The server is running at ${PORT}`) )