import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchEventController } from "../../controllers/eventControllers/patchEventController";
import { eventHelper } from "../../helpers/eventHelper";
import { eventService } from "../../service/eventService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new eventHelper()
const service = new eventService(helper)
const patchEventController = new PatchEventController(service)

export function patchEventRoute(router: Router) {
    router.patch("/v1/event/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchEventController.run.bind(patchEventController))
}