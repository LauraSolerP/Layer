"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEventRoute = deleteEventRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteEventController_1 = require("../../controllers/eventControllers/deleteEventController");
const eventHelper_1 = require("../../helpers/eventHelper");
const eventService_1 = require("../../service/eventService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const deleteEventController = new deleteEventController_1.DeleteEventController(service);
function deleteEventRoute(router) {
    router.delete("/v1/event/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), deleteEventController.run.bind(deleteEventController));
}
//# sourceMappingURL=deleteEvent.js.map