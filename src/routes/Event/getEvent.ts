import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetEventsController } from "../../controllers/eventControllers/getEventsController";
import { eventHelper } from "../../helpers/eventHelper";
import { eventService } from "../../service/eventService";

const helper = new eventHelper()
const service = new eventService(helper)
const getEventsController = new GetEventsController(service)

export function getEventRoute(router: Router) {
    router.get("/v1/event/:id", new UserMiddleware().run, getEventsController.run.bind(getEventsController))
}