const mongoose = require("mongoose");
const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String
    },

    description: {
        type: String
    }
});

const Task = mongoose.model("Task" , TaskSchema);

module.exports = {Task};