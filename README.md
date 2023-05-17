# ToDo_App_using_MEeN
a simple to do application  made using MongoDB, ExpressJs, NodeJs and EJS.

## Features
1. add a task in taskbar, press add to add task in db.
2. Date, add the date when task was added, show the days on side.
3. Status, set status as completed or pending.

//models-
task= string.
date= string using moments.
status = bool.

//view
/ = home.ejs
1. show the table of done and remaining.
2. when new task added , submit the form and store it in db.
3. the status toggle for pending and completed.
4. the delete button to delete the task.
5. the edit button to edit the task.

//controller


//routes-
1. / for homepage
2. /add to add new task , used by the form
3. /delete to delete a existing task, else show warning.
4. /edit to edit existing task.
