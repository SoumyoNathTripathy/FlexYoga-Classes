const router = require("express").Router()
const {readAllTask,createTask,updateTask, deleteTask}= require("../controllers/task-controller")

router.post('/create',createTask)

module.exports=router