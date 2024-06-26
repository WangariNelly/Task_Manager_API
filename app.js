import connectDB from  './db/connect.js';
import express from "express";
const app = express();

const port = 5000;
import tasks from './routes/tasks.js';
import dotenv from 'dotenv';
dotenv.config();
import notFound from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

//middleware
app.use(express.static('./public'))
app.use(express.json());


//routes
app.use('/api/v1/tasks', tasks);

//custom middlewares
app.use(notFound);
app.use(errorHandlerMiddleware);

//connect to DB
const connectToDatabase = async ()=> {
    try{
        await connectDB(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        app.listen(port,console.log(`Server running on ${port}...`))
    } catch (err){
        console.log(err.message)
    }
};
connectToDatabase();
