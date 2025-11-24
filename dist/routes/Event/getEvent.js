"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventRoute = getEventRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getEventsController_1 = require("../../controllers/eventControllers/getEventsController");
const eventHelper_1 = require("../../helpers/eventHelper");
const eventService_1 = require("../../service/eventService");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const getEventsController = new getEventsController_1.GetEventsController(service);
function getEventRoute(router) {
    router.get("/v1/event/:id", new userMiddleware_1.UserMiddleware().run, getEventsController.run.bind(getEventsController));
}
//# sourceMappingURL=getEvent.js.map