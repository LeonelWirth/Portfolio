require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_URL)
mongoose.set('strictQuery', true)
const db = mongoose.connection
db.on("error", (error) => console.error(error))
db.once("open", () => console.log("Connected to database"))

var Puerto = 3001;


app.listen(Puerto, () => console.log((`Server iniciando en el puerto ${Puerto}`)))