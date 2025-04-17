const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks}) // same as tasks : tasks
    // Extra params: amount:tasks.length, success:true, status:'Success', data: {tasks, nbHits: tasks.length}
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
})

const getTask = asyncWrapper(async (req, res, next) => {
    const {id : taskID} = req.params
    const task = await Task.findOne({_id : taskID})
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }   
    res.status(200).json({task})
})

const updateTask = asyncWrapper(async (req, res) => {
    const {id:taskID} = req.params;
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
        new:true, runValidators:true, // Makes sure the response from updating is the new data
        // overwrite: true // Overwrites all data to be the req.body contents
    })
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).json({id:taskID,data:req.body})

})

const deleteTask = asyncWrapper(async (req, res) => {
    const {id: taskID } = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if (!task) {
        return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
    res.status(200).send()
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}


