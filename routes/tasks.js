import express from "express";
const router = express.Router();
import { getAllTasks,createTasks,getTask,updateTasks,deleteTasks } from "../controllers/tasks.js";

router.route("/").get(getAllTasks).post(createTasks);
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks);

export default router;
