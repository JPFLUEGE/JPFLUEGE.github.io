const express = require("express");
const cors = require("cors");
require("dotenv").config();
const request = require("request")

const PORT = 8000;
const app = express();
app.use(cors())


app.get("/", (req, res) => {
    res.sendStatus(200)
})

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})