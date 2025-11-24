import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchEventDateController } from "../../controllers/eventControllers/patchEventDateController";
import { eventHelper } from "../../helpers/eventHelper";
import { eventService } from "../../service/eventService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new eventHelper()
const service = new eventService(helper)
const patchEventDateController = new PatchEventDateController(service)

export function patchEventDateRoute(router: Router) {
    router.patch("/v1/event/:id", new UserMiddleware().run, requireRole(["ADMIN"]), patchEventDateController.run.bind(patchEventDateController))
}