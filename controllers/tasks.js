import Task from '../models/tasks.js'
import asyncWrapper from '../middleware/async.js';

export const getAllTasks = asyncWrapper(async (req,res) => { 
    const tasks = await Task.find({});
     res.status(200).json({ tasks });
});


export const createTasks = asyncWrapper(async (req,res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
});


export const getTask = asyncWrapper(async (req,res) => {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
           return res.status(404).json({ msg: `No task with this ID` }) 
        }
        res.status(200).json({ task }) 
});


export const deleteTasks = asyncWrapper(async (req,res) => {
  
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({ msg: `No task with this ID` }) 
         }
         res.status(200).json({ task }) 
    });
  

    export const updateTasks = asyncWrapper(async (req,res) => {
            const {id:taskID} = req.params;
           const task = await Task.findByIdAndUpdate({_id:taskID},req.body, {
            new:true, runValidators:true
           })
         if(!task){
            return res.status(404).json({ msg: `No task with this ID` }) 
         }
         res.status(200).json({ task }) 
    });