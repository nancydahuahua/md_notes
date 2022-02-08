const express = require('express');
const router = require("./routes");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/", router)

module.exports = app;