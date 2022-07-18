const loginRoute = {
    tags: ["User"],
    description: 'user login ',
    requestBody: {
        content:{
            "application/json":{
                schema: {
                    type: "object",
                    properties:{
                        email: {
                            type: "string",
                            description: "Email of the user",
                            example: "juhi48@gmail.com"
                        },
                        password: {
                            type: "string",
                            description: "Password of the user",
                            example: "20001rc"
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
                            user:
                            {
                                userID:"_id",
                                name:"name",
                                email:"email",
                                token: "token"
                            }
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
                            message: 'Invailid credintials.'
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

const logoutRoute = {
    tags: ["User"],
    description: 'user logout ',
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
                            message: 'successfully logged out'
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

const signupRoute ={
    tags: ["User"],
    description: 'user signup ',
    requestBody: {
        content:{
            "application/json":{
                schema: {
                    type: "object",
                    properties:{
                        name: {
                            type: "string",
                            description: "Name of the user",
                            example: "juhi"
                        },
                        email: {
                            type: "string",
                            description: "Email of the user",
                            example: "juhi48@gmail.com"
                        },
                        password: {
                            type: "string",
                            description: "Password of the user",
                            example: "20001rc"
                        },
                        cpassword: {
                            type: "string",
                            description: "Password of the user",
                            example: "20001rc"
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
                            user:{
                                userID: "_id",
                                name: "name",
                                email: "email",
                                token: "token"
                            }
                        }
                    }
                }
            }
        },
        409:{
            description:"Conflict",
            content:{
                "application/json":{
                    schema: {
                        type: "object",
                        example:{
                            status: "FAILED",
                            message: "user already exists"
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
                            message: "password doesn\'t match"
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
                            message: "err"
                        }
                    }
                }
            }
        }
    }
}

const loggedInRoute ={
    tags: ["User"],
    description: 'user logout ',
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
                            user:{
                                userID: "_id",
                                name: "name",
                                email: "email",
                                token: "token"
                            }
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
                            status: 'FAILED', 
                            message:'Invalid Token'
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

module.exports ={loginRoute, logoutRoute, signupRoute, loggedInRoute}