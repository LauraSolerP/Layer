"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putEventRoute = putEventRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putEventController_1 = require("../../controllers/eventControllers/putEventController");
const eventService_1 = require("../../service/eventService");
const eventHelper_1 = require("../../helpers/eventHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const putEventController = new putEventController_1.PutEventController(service);
function putEventRoute(router) {
    router.put("/v1/event/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["ADMIN"]), putEventController.run.bind(putEventController));
}
//# sourceMappingURL=putEvent.js.map