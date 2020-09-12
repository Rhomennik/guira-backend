import { getRepository } from "typeorm";

import Task from "../models/Task";

import AppError from "../errors/AppError";

interface Request {
  id?: string;
  macaddress: string;
  type: string;
  user_name: string;
  id_user: string;
  id_task: string;
  id_task_validator: boolean;
  chat_id: string;
  message_id: string;
  message: string;
  description: string;
  done: string;
  deleted: Date;
  accessed: Date;
  created: Date;
  modified: Date;
}

class CreateTaskService {
  public async execute({
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
    id,
  }: Request): Promise<Task> {
    const taskRepository = getRepository(Task);

    const checkIdExist = await taskRepository.findOne({
      where: { id },
    });

    if (checkIdExist) {
      throw new AppError("Email address already exist");
    }

    const task = taskRepository.create({
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

    await taskRepository.save(task);

    return task;
  }
}

export default CreateTaskService;
