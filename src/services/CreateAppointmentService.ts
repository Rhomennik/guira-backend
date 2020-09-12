import { startOfHour } from "date-fns";
import { getCustomRepository } from "typeorm";

import Appointment from "../models/Appointments";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

import AppError from "../errors/AppError";

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const taskRepository = getCustomRepository(AppointmentsRepository);

    const findAppointmentInSameDate = await taskRepository.findByDate(null);

    return findAppointmentInSameDate;
  }
}

export default CreateAppointmentService;
