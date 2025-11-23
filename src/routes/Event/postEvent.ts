import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostEventController } from "../../controllers/eventControllers/postEventController";
import { eventService } from "../../service/eventService";
import { eventHelper } from "../../helpers/eventHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new eventHelper()
const service = new eventService(helper)
const postEventController = new PostEventController(service)

export function postEventRoute(router: Router) {
    router.post("/v1/event", new UserMiddleware().run, requireRole(["ADMIN"]), postEventController.run.bind(postEventController))
}