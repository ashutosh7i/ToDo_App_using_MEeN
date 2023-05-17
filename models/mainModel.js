//connect to mongodb
const mongoose = require("mongoose")

//database url with  /databaseName
const url = "mongodb://127.0.0.1:27017/ToDoDatabase";

//connecting to database
try {
    mongoose.connect(url);
    console.log("connected to database");
} catch (error) {
    console.log("database connection failed");
}

//making a Schema
const itemSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, "Please enter a task"],
        unique: true
    },
    dateAdded: {
        type: String,
    },
    status: {
        type: Boolean,
    }
},
    { timestamps: true }
)

//making a model
const itemModel = mongoose.model('item', itemSchema);

//exporting the model
module.exports = itemModel;
