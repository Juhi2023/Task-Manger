const express = require('express');
const dotenv = require('dotenv')
const path = require('path')
const passport = require('passport')
const cors = require('cors')
const swaggerUi =require('swagger-ui-express')
const db = require("./configs/db");
const userRoutes = require('./routes/user')
const taskRoutes = require('./routes/task');
const swaggerJSDoc = require('swagger-jsdoc');
const options = require('./utils/documentation');
dotenv.config({path: path.join(__dirname, '.env')})
const port = process.env.PORT || 5000;

//passport middleware
require('./middlewares/passport')(passport)

//db connection
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


const app = express()
app.use(express.json());
app.use(cors())
app.use(passport.initialize())

//user table creation
db.query(`CREATE TABLE IF NOT EXISTS users (_id VARCHAR(225) PRIMARY KEY, email VARCHAR(50) NOT NULL, name VARCHAR(225) NOT NULL, password VARCHAR(225) NOT NULL, date DATETIME NOT NULL);`, function (err, result) {
    if (err)  throw err;
    console.log("User Table created");
});

//task table creation
db.query(`CREATE TABLE IF NOT EXISTS tasks (_id VARCHAR(225) PRIMARY KEY, userID VARCHAR(225) NOT NULL, title TEXT NOT NULL, description TEXT NOT NULL, date DATETIME NOT NULL);`, function (err, result) {
    if (err)  throw err;
    console.log("Task Table created");
});

//all routes
app.use('/', userRoutes)
app.use('/', taskRoutes)
app.use('/api-docs', swaggerUi.serve)
app.use('/api-docs', swaggerUi.setup(swaggerJSDoc(options)))


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
}
  
app.listen(port, ()=>{
    console.log(`DF backend Listening at port ${port}`)
})
