const getAllTasksRoute = {
    tags: ["Task"],
    description: 'Get all task of user',
    security: [{
        bearer: []
      }],
    responses: {
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status:'SUCCESS', 
                            data: []
                            }
                        }
                    }
                }
            },
        400:{
            description:"Bad Request",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'err'
                        }
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'Unauthorized'
                        }
                    }
                }
            }
        },

        500:{
            description:"Internal Server Error",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: "Internal Server Error"
                        }
                    }
                }
            }
        }
    }
}

const addTaskRoute = {
    tags: ["Task"],
    description: 'add a task',
    security: [{
        bearer: []
      }],
      requestBody: {
        content:{
            "application/json":{
                schema: {
                    type: "object",
                    properties:{
                        title: {
                            type: "string",
                            description: "title of the task",
                            example: "complete assignments"
                        },
                        description: {
                            type: "string",
                            description: "Description of the user",
                            example: "Maths & Englih"
                        }
                    }
                }
            }
        },
    },
    responses: {
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status:'SUCCESS', 
                            data: []
                            }
                        }
                    }
                }
            },
        400:{
            description:"Bad Request",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'err'
                        }
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'Unauthorized'
                        }
                    }
                }
            }
        },500:{
            description:"Internal Server Error",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: "Internal Server Error"
                        }
                    }
                }
            }
        }
    }
}

const editTaskRoute ={
    tags: ["Task"],
    description: 'edit a task',
    security: [{
        bearer: []
      }],
    parameters:[{
        in: "path",
        name: "id",
        required: true,
        description: "String ID of the task to retrieve",
        schema:{
            type: "string"
        }
    }],
    requestBody: {
        content:{
            "application/json":{
                schema: {
                    type: "object",
                    properties:{
                        title: {
                            type: "string",
                            description: "title of the task",
                            example: "complete assignments"
                        },
                        description: {
                            type: "string",
                            description: "Description of the user",
                            example: "Maths & Englih"
                        }
                    }
                }
            }
        },
    },
    responses: {
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status:'SUCCESS', 
                            data: []
                            }
                        }
                    }
                }
            },
        400:{
            description:"Bad Request",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'err'
                        }
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'Unauthorized'
                        }
                    }
                }
            }
        },500:{
            description:"Internal Server Error",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: "Internal Server Error"
                        }
                    }
                }
            }
        }
    }
}

const deleteTaskRoute ={
    tags: ["Task"],
    description: 'delete a task ',
    security: [{
        bearer: []
      }],
    parameters:[{
        in: "path",
        name: "id",
        required: true,
        description: "String ID of the task to retrieve",
        schema:{
            type: "string"
        }
    }],

    responses: {
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status:'SUCCESS', 
                            data: []
                            }
                        }
                    }
                }
            },
        400:{
            description:"Bad Request",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'err'
                        }
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: 'Unauthorized'
                        }
                    }
                }
            }
        },500:{
            description:"Internal Server Error",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: "Internal Server Error"
                        }
                    }
                }
            }
        }
    }
}

module.exports ={getAllTasksRoute, addTaskRoute, editTaskRoute, deleteTaskRoute}