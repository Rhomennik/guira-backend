import { getRepository } from "typeorm";
import { hash } from "bcryptjs";
import User from "../models/User";

import AppError from "../errors/AppError";

interface Request {
  name: string;
  email: string;
  password: string;
  permission_level: number;
  push_token: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    permission_level,
    push_token,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new AppError("Email address already exist");
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      permission_level,
      push_token,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
