const express = require('express');
const router = express.Router();
const passport = require('passport')

const {getAllTasks, addTask, editTask, deleteTask} = require('../controllers/taskController')

router.get('/getAllTasks', passport.authenticate("jwt", {session: false}), getAllTasks)
router.post('/addTask', passport.authenticate("jwt", {session: false}), addTask)
router.put('/editTask/:id', passport.authenticate("jwt", {session: false}), editTask)
router.delete('/deleteTask/:id', passport.authenticate("jwt", {session: false}), deleteTask)


module.exports = router;