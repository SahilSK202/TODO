const { models } = require("mongoose");

module.exports = async( _, {} ,{models}) =>{
    return await models.Task.find();
}