import { getRepository } from "typeorm";

import User from "../models/User";
import AppError from "../errors/AppError";

interface Request {
  user_id: string;
  push_token: string;
}

class UpdatePushTokenService {
  public async execute({ push_token, user_id }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);

    if (!user) {
      throw new AppError("Only authenticated users can change push.", 401);
    }

    user.push_token = push_token;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdatePushTokenService;
