import { Router } from "express";
import * as workDayController from "../../controllers/workDayController";

const workDayRouter = Router();

// Retorna todos os workDays
workDayRouter.get("/", workDayController.getAllWorkDays);

// Retorna o workDay com o id específico
workDayRouter.get("/:id", workDayController.getWorkDayById);

// Cria um novo workDay
workDayRouter.post("/", workDayController.createWorkDay);

// Atualiza um workDay com o id específico
workDayRouter.put("/:id", workDayController.updateWorkDayById);

// Deleta um workDay com o id específico
workDayRouter.delete("/:id", workDayController.deleteWorkDayById);

export default workDayRouter;
