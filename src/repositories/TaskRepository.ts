import { EntityRepository, Repository } from "typeorm";

import Task from "../models/Task";

@EntityRepository(Task)
class TaskRepository extends Repository<Task> {
  public async getTask(id: string | null): Promise<any | null> {
    const findTask = await this.find();

    return findTask || null;
  }
}

export default TaskRepository;
