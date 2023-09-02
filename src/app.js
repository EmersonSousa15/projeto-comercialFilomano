require('dotenv').config();
const mysql = require('./config/db');
const express = require('express');
const productRoute = require('./routes/productRoute');

const app = express();

app.use(express.json());
app.use(productRoute);
app.listen(3304, (err) => {
    if (err) {
        console.log("Erro ao escutar", err);
        return;
    }
    console.log(`App listening on port 3304`);
})

module.exports = app;
