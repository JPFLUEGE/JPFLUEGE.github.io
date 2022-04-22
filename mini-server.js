const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");

const PORT = 8000;
const app = express();
app.use(cors())


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`)
})