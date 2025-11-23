import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutEventController } from "../../controllers/eventControllers/putEventController";
import { eventService } from "../../service/eventService";
import { eventHelper } from "../../helpers/eventHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new eventHelper()
const service = new eventService(helper)
const putEventController = new PutEventController(service)

export function putEventRoute(router: Router) {
    router.put("/v1/event/:id", new UserMiddleware().run, requireRole(["ADMIN"]), putEventController.run.bind(putEventController))
}