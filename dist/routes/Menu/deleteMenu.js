"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMenuRoute = deleteMenuRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteMenuController_1 = require("../../controllers/menuControllers/deleteMenuController");
const menuHelper_1 = require("../../helpers/menuHelper");
const menuService_1 = require("../../service/menuService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const deleteMenuController = new deleteMenuController_1.DeleteMenuController(service);
function deleteMenuRoute(router) {
    router.delete("/v1/menu/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), deleteMenuController.run.bind(deleteMenuController));
}
//# sourceMappingURL=deleteMenu.js.map