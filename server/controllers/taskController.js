const db = require("../configs/db");
const {v4: uuidv4} = require('uuid');

const getAllTasks =(req, res)=>{
    try{
        db.query(`SELECT * FROM tasks WHERE userID = '${req.user._id}'`, function (err, result){
            if(err){
                return res.status(409).json({
                    status: "FAILED",
                    message: err
                })
            }else{
                return res.status(201).json({status:'SUCCESS', data: result})
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

const addTask =(req, res)=>{
    try{
        const {title, description,}= req.body
        db.query(`INSERT INTO tasks (_id, userID, title, description, date) VALUES ('${uuidv4()}', '${req.user._id}', '${title}', '${description}', NOW())`, function (err, result){
            if(err){
                return res.status(409).json({
                    status: "FAILED",
                    message: err
                })
            }else{
                db.query(`SELECT * FROM tasks WHERE userID = '${req.user._id}'`, function (err, result){
                    if(err){
                        return res.status(409).json({
                            status: "FAILED",
                            message: err
                        })
                    }else{
                        return res.status(201).json({status:'SUCCESS', data: result})
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

const editTask =(req, res)=>{
    try{
        const {id} = req.params;
        const {title, description}= req.body;
        
        db.query(`UPDATE tasks SET title= '${title}', description ='${description}' WHERE _id='${id}'`, function (err, result){
            if(err){
                return res.status(409).json({
                    status: "FAILED",
                    message: err
                })
            }else{
                db.query(`SELECT * FROM tasks WHERE userID = '${req.user._id}'`, function (err, result){
                    if(err){
                        return res.status(409).json({
                            status: "FAILED",
                            message: err
                        })
                    }else{
                        return res.status(201).json({status:'SUCCESS', data: result})
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


const deleteTask =(req, res)=>{
    try{
        
        const {id} = req.params;
        
        db.query(`DELETE FROM tasks WHERE _id='${id}'`, function (err, result){
            if(err){
                return res.status(409).json({
                    status: "FAILED",
                    message: err
                })
            }else{
                db.query(`SELECT * FROM tasks WHERE userID = '${req.user._id}'`, function (err, result){
                    if(err){
                        return res.status(409).json({
                            status: "FAILED",
                            message: err
                        })
                    }else{
                        return res.status(201).json({status:'SUCCESS', data: result})
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

module.exports = {getAllTasks, addTask, editTask, deleteTask}