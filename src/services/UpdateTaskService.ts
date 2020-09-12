import { getRepository } from "typeorm";

import Task from "../models/Task";
import AppError from "../errors/AppError";

interface Request {
  type: string;
  deleted: string;
  id_task: string;
}

class UpdateTaskService {
  public async execute({ type, deleted, id_task }: Request): Promise<Task> {
    const taskRepository = getRepository(Task);

    const task = await taskRepository.findOne(id_task);

    if (!task) {
      throw new AppError("Task no exist", 401);
    }

    task.deleted = deleted;
    task.type = type;

    await taskRepository.save(task);

    return task;
  }
}

export default UpdateTaskService;
