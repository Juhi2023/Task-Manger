const { getAllTasksRoute, addTaskRoute, editTaskRoute, deleteTaskRoute } = require("../documents/task")
const { loginRoute, loggedInRoute, signupRoute, logoutRoute } = require("../documents/user")

const swaggerDefinition = {
    openapi: "3.0.0",

    info: {
        title: 'API Documentation for Task Manager',
        version: "1.0.0",
        description: "visit Task Manager at [website](https://task--manager--app.herokuapp.com)"
    },

    servers:[
        {
            url: "http://localhost:5000",
            description: "Local dev"
        },
        {
            url: "http://localhost:5000",
            description: "Production dev"
        }
    ],

    basePath:'/',

    schemes: ["https", "http"],

    tags: [
        {
            name: "User",
            description: "User routes"
        },
        {
            name:'Task',
            description: 'Task routes'
        }
    ],

    paths: {
        "/signup":{
            post: signupRoute
        },
        "/login":{
            post: loginRoute
        },
        "/logout":{
            get: logoutRoute
        },
        "/loggedIn":{
            get: loggedInRoute
        },
        "/getAllTasks":{
            get: getAllTasksRoute
        },
        "/addTask":{
            post: addTaskRoute
        },
        "/editTask/{id}":{
            put: editTaskRoute
        },
        "/deleteTask/{id}":{
            delete: deleteTaskRoute
        }
    },

    components: {
        securitySchemes: {
          bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header'
          }
        }
    },

}

const options ={
    swaggerDefinition,
    apis: ['./routes/*.js'],
}

module.exports = options