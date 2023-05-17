//importing database
const Item = require("../Models/mainModel")

//import any package used
const moment = require("moment")
var date = moment().format("DD-MM-YYYY_hh:mm:ss-a");



//Show the rendered home Page
async function handleShowTasks(req, res) {

    //fetching everything from db
    const tasks = await Item.find();

    //rendering using EJS
    res.render("homepage", { tasks });
}


//Add a new Task
async function handleAddTask(req, res) {

    //parsing the task from form
    const taskBody = req.body.newTask;

    //saving the response in the database
    await Item.create({
        task: taskBody,
        dateAdded: date,
        status: false,
    })

    // sending response code 201 = Created and redirecting/refreshing 
    res.status(201).send(`
    <script>
        alert("Task Added Successfully: ${date}");
        window.location.href = "/";
    </script>
    `);

}

//Update an existing task
async function handleUpdateTask(req, res) {
    const taskId = req.body.taskId

    // Fetch the task from the database
    const task = await Item.findById(taskId);

    if (!task) {
        // Task not found
        return res.status(404).send("Task not found");
    }

    // Toggle the status
    task.status = !task.status;

    // Save the updated task
    await task.save();

    res.status(201).send(`
    <script>
        alert("Task updated Successfully");
        window.location.href = "/";
    </script>
    `);
}




//Delete an existing task
async function handleDeleteTask(req, res) {
    const taskId = req.body.taskId

    await Item.findByIdAndDelete(taskId);

    res.status(201).send(`
    <script>
        alert("Task Deleted Successfully");
        window.location.href = "/";
    </script>
    `);

}



module.exports = {
    handleShowTasks,
    handleAddTask,
    handleUpdateTask,
    handleDeleteTask,
}