

module.exports = async ( _, {input} , {models}) =>{

    // const newTask = {
    //     created: new Date(),
    //     input
    // }

    newTask = await models.Task.create(input);
 

    return newTask;
};



