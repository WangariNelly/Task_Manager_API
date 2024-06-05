import express from "express";
const app = express();
import tasks from './routes/tasks.js';


//middleware
app.use(express.json());

//routes
app.use('/api/v1/tasks', tasks);

const port = 5000;
app.listen(port,console.log(`Server running on ${port}...`))