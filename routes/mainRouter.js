//importing express and express router
const express = require('express')
const router = express.Router();

//importing controller functions for handling
const {
    //any function exported from controller
    handleShowTasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
} = require("../Controllers/mainController")


//routing to specific controller functions
router.get("/", handleShowTasks)               //to show homepage
router.post("/add", handleAddTask)             //user registration using form and POST
router.post("/update", handleUpdateTask)         //show all registered uses
router.post("/delete", handleDeleteTask)     //delete a task

//exporting router
module.exports = router;