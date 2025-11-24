"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventsRoute = getEventsRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getEventController_1 = require("../../controllers/eventControllers/getEventController");
const eventHelper_1 = require("../../helpers/eventHelper");
const eventService_1 = require("../../service/eventService");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const getEventController = new getEventController_1.GetEventController(service);
function getEventsRoute(router) {
    router.get("/v1/event", new userMiddleware_1.UserMiddleware().run, getEventController.run.bind(getEventController));
}
//# sourceMappingURL=getEvents.js.map