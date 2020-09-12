import { Router } from "express";

import TaskRepository from "../repositories/TaskRepository";
import CreateTaskService from "../services/CreateTaskService";
import UpdateTaskService from "../services/UpdateTaskService";

import { getCustomRepository } from "typeorm";

const taskRouter = Router();

taskRouter.get("/", async (request, response) => {
  const id = null;
  const taskRepository = getCustomRepository(TaskRepository);
  const tasks = await taskRepository.getTask(id);

  return response.json(tasks);
});

taskRouter.post("/", async (request, response) => {
  try {
    const {
      macaddress,
      type,
      user_name,
      id_user,
      id_task,
      id_task_validator,
      chat_id,
      message_id,
      message,
      description,
      done,
      deleted,
      accessed,
      created,
      modified,
    } = request.body;

    const createTask = new CreateTaskService();

    const task = await createTask.execute({
      macaddress,
      type,
      user_name,
      id_user,
      id_task,
      id_task_validator,
      chat_id,
      message_id,
      message,
      description,
      done,
      deleted,
      accessed,
      created,
      modified,
    });

    response.json(task);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

taskRouter.patch("/", async (request, response) => {
  const updateTaskService = new UpdateTaskService();
  const { type, deleted, id_task } = request.body;

  const updatedTask = await updateTaskService.execute({
    type,
    deleted,
    id_task,
  });

  return response.json({ ok: true, response: updatedTask });
});

export default taskRouter;
