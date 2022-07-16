const mysql = require('mysql2')
const db = mysql.createConnection({
    host: process.env.HOSTNAME || 'localhost',
    user: process.env.USER || 'root',
    database:process.env.DATABASE || 'taskmanager',
    password:process.env.PASSWORD || '',
    multipleStatements: true
});

 

module.exports = db;