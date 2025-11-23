import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchTruckInscriptionController } from "../../controllers/truckControllers/patchTruckInscriptionController";
import { requireRole } from "../../middlewares/requireRoleMiddleware";
import { inscriptionService } from "../../service/inscriptionService";
import { inscriptionHelper } from "../../helpers/inscriptionHelper";
import { eventHelper } from "../../helpers/eventHelper";
import { eventService } from "../../service/eventService";

const iHelper = new inscriptionHelper()
const eHelper = new eventHelper()
const eService = new eventService(eHelper)
const iService = new inscriptionService(iHelper, eService)
const patchTruckInscriptionController = new PatchTruckInscriptionController(iService)

export function patchTruckInscriptionRoute(router: Router) {
    router.patch("/v1/truck/:id", new UserMiddleware().run, requireRole(["OWNER", "ADMIN"]), patchTruckInscriptionController.run.bind(patchTruckInscriptionController))
}