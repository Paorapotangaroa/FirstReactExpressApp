//move all the settings into a single file to mimic settings.py

const paths = require("./urls.js")
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 3333;
const corsOptions = {
    origin: 'http://localhost:3000',
}


module.exports = {
    paths, path, app, PORT, express, cors, corsOptions
}