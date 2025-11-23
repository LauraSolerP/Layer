import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetEventController } from "../../controllers/eventControllers/getEventController";
import { eventHelper } from "../../helpers/eventHelper";
import { eventService } from "../../service/eventService";

const helper = new eventHelper()
const service = new eventService(helper)
const getEventController = new GetEventController(service)

export function getEventsRoute(router: Router) {
    router.get("/v1/event", new UserMiddleware().run, getEventController.run.bind(getEventController))
}