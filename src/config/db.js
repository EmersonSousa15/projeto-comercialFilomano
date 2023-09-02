require('dotenv').config();
const mysql = require('mysql2');
const db = mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
    });
    

db.connect((err) => {
    if(err){
        console.log("Conexão não foi realizada!", err);
        return;
    } 
    
    console.log("Conexão feita com sucesso!");
});

module.exports = db; 
