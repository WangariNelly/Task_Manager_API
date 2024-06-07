import Task from '../models/tasks.js'

export const getAllTasks = async (req,res) => {
    try{
    const tasks = await Task.find({});
     res.status(200).json({ tasks })
    }catch (err){
        res.status(500).json({ msg: err});
    }
};


export const createTasks = async (req,res) => {
    try{
    const task = await Task.create(req.body)
    res.status(201).json({ task })
} catch (err){
    res.status(500).json({ msg: err })
}
};


export const getTask = async (req,res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
           return res.status(404).json({ msg: `No task with this ID` }) 
        }
        res.status(200).json({ task }) 
    }catch (err){
    res.status(500).json({ msg: err })
    }
};


export const deleteTasks = async (req,res) => {
    try{
        const {id:taskID} = req.params;
        const task = await Task.findOneAndDelete({_id:taskID});
        if(!task){
            return res.status(404).json({ msg: `No task with this ID` }) 
         }
         res.status(200).json({ task }) 
    }catch (err){
        res.status(500).json({ msg: err })
        }
    };
  

    export const updateTasks = async (req,res) => {
        try{
            const {id:taskID} = req.params;
           const task = await Task.findByIdAndUpdate({_id:taskID},req.body, {
            new:true, runValidators:true
           })
         if(!task){
            return res.status(404).json({ msg: `No task with this ID` }) 
         }
         res.status(200).json({ task }) 
    }catch (err){
        res.status(500).json({ msg: err })
        }
    }