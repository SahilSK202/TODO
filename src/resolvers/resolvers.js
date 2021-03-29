// const mutations = require("./mutations");
// const queries = require("./queries");

const CreateTask = require("./mutations/CreateTask");
const UpdateTask = require("./mutations/UpdateTask");
const DeleteTask = require("./mutations/DeleteTask");

const AllTasks = require("./queries/Task")

module.exports = {
    Mutation:{
        CreateTask,
        UpdateTask,
        DeleteTask
    },
    Query:{
        AllTasks
    }

}