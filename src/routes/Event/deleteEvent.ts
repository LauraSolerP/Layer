import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteEventController } from "../../controllers/eventControllers/deleteEventController";
import { eventHelper } from "../../helpers/eventHelper";
import { eventService } from "../../service/eventService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new eventHelper()
const service = new eventService(helper)
const deleteEventController = new DeleteEventController(service)

export function deleteEventRoute(router: Router) {
    router.delete("/v1/event/:id", new UserMiddleware().run, requireRole(["ADMIN"]), deleteEventController.run.bind(deleteEventController))
}