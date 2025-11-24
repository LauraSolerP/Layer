"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchEventDateRoute = patchEventDateRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchEventDateController_1 = require("../../controllers/eventControllers/patchEventDateController");
const eventHelper_1 = require("../../helpers/eventHelper");
const eventService_1 = require("../../service/eventService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new eventHelper_1.eventHelper();
const service = new eventService_1.eventService(helper);
const patchEventDateController = new patchEventDateController_1.PatchEventDateController(service);
function patchEventDateRoute(router) {
    router.patch("/v1/event/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchEventDateController.run.bind(patchEventDateController));
}
//# sourceMappingURL=patchEventDate.js.map