
export const getAllTasks = (req,res) => {
    res.send('Task manager items')
};


export const createTasks = (req,res) => {
    res.json(req.body)
};


export const getTask = (req,res) => {
    res.json({id:req.params.id}) 
};


export const updateTasks = (req,res) => {
    res.send('Task updates')
};

export const deleteTasks = (req,res) => {
    res.send('Task deleted')
};
