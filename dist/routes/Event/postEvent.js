"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postEventRoute = postEventRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const postEventController_1 = require("../../controllers/eventControllers/postEventController");
const eventService_1 = require("../../service/eventService");
const eventHelper_1 = require("../../helpers/eventHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const postEventController = new postEventController_1.PostEventController(service);
function postEventRoute(router) {
    router.post("/v1/event", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["ADMIN"]), postEventController.run.bind(postEventController));
}
//# sourceMappingURL=postEvent.js.map