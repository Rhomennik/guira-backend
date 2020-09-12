import { Router, RouterOptions } from "express";

import appointmentsRouter from "./appointments.routes";
import taskROuter from "./task.routes";
import usersRouter from "./users.routes";
import sessionsRouter from "./sessions.routes";

const routes = Router();

// routes.use("/appointments", appointmentsRouter);
routes.use("/task", taskROuter);
routes.use("/users", usersRouter);
routes.use("/sessions", sessionsRouter);

export default routes;
