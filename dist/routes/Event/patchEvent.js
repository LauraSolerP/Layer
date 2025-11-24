"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchEventRoute = patchEventRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchEventController_1 = require("../../controllers/eventControllers/patchEventController");
const eventHelper_1 = require("../../helpers/eventHelper");
const eventService_1 = require("../../service/eventService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const patchEventController = new patchEventController_1.PatchEventController(service);
function patchEventRoute(router) {
    router.patch("/v1/event/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchEventController.run.bind(patchEventController));
}
//# sourceMappingURL=patchEvent.js.map