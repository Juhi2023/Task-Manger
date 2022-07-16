const db = require("../configs/db");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {v4: uuidv4} = require('uuid')

const signup = async (req, res)=>{
    
    try{
        let {name, email, password, cpassword} = req.body;
        name = name.trim()
        email = email.trim()
        password = password.trim()
        cpassword = cpassword.trim()

        db.query(`SELECT * FROM users WHERE email = LOWER('${email}')`, function (err, result){
            if(result && result.length){
                //user exist
                return res.status(409).json({
                    status: "FAILED",
                    message: "user already exists"
                })
            }else if(password !== cpassword){
                return res.status(401).json({
                    status: "FAILED",
                    message: "password doesn\'t match"
                })
            }else{
                bcrypt.hash(password, 10, (err, hash)=>{
                    if(err){
                        return res.status(401).json({
                            status: "FAILED",
                            message: err
                        })
                    }else{
                        const _id = uuidv4();
                        db.query(`INSERT INTO users (_id, email, name, password, date) VALUES ('${_id}', LOWER('${email}'), "${name}", '${hash}', NOW())`, function(err, result){
                            if(err){
                                
                                return res.status(400).json({
                                    status: "FAILED",
                                    message: err
                                })
                            }
                            const token = jwt.sign({_id, email},
                                process.env.JWT_TOKEN,
                                {expiresIn: "7d"})

                            return res.status(201).json({status:'SUCCESS', user:{
                                userID: _id,
                                name,
                                email,
                                token: token
                            }})
                        })
                    }
                })
            }
        })
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            status: "FAILED",
            message: "Internal Server Error"
        })
    }
}

const login = async (req, res)=>{

    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                status: "FAILED",
                message: 'Plz enter valid data.'
            })
        }
        
        db.query(`SELECT * FROM users WHERE email = LOWER('${email}')`, function (err, result){
            if(!result ){
                return res.status(400).json({
                    status: "FAILED",
                    message: 'Invailid credintials.'
                })
            }
            
            bcrypt.compare(password, result[0].password, (berr, bResult)=>{
                if(berr){
                    return res.status(400).json({
                        status: "FAILED",
                        message: 'Invailid credintials.'
                    })
                }
                if(bResult){
                    const token = jwt.sign({_id: result[0]._id, email},
                        process.env.JWT_TOKEN,
                        {expiresIn: "7d"})

                    return res.status(201).json({status:'SUCCESS', user:{
                        userID: result[0]._id,
                        name: result[0].name,
                        email: result[0].email,
                        token: token
                    }})
                }
            })
        })
            
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            status: "FAILED",
            message: "Internal Server Error"
        })
    }
}

const logout = async (req, res) =>{
    try{
        return res.status(201).json({status:'SUCCESS', message: 'successfully logged out'})
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            status: "FAILED",
            message: "Internal Server Error"
        })
    }
}

const loggedIn = (req, res)=>{
    try{
        if(req.user){
            return res.status(201).json({status: 'SUCCESS', user:{
                userID: req.user._id,
                name: req.user.name,
                email: req.user.email,
            }})
        }else{
            return res.status(400).json({status: 'FAILED', message:'Invalid Token'})
        }

    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            status: "FAILED",
            message: "Internal Server Error"
        })
    }
}


module.exports = {signup, login, logout, loggedIn} 