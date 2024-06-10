import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 20
    }, 
    completed: {
       type: Boolean,
       default: false
    }
});

export default mongoose.model('Task', TaskSchema);

