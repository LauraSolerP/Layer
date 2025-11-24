"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchMenuRoute = patchMenuRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchMenuController_1 = require("../../controllers/menuControllers/patchMenuController");
const menuHelper_1 = require("../../helpers/menuHelper");
const menuService_1 = require("../../service/menuService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const patchMenuController = new patchMenuController_1.PatchMenuController(service);
function patchMenuRoute(router) {
    router.patch("/v1/menu/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchMenuController.run.bind(patchMenuController));
}
//# sourceMappingURL=patchMenu.js.map