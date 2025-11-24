"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putMenuRoute = putMenuRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putMenuController_1 = require("../../controllers/menuControllers/putMenuController");
const menuService_1 = require("../../service/menuService");
const menuHelper_1 = require("../../helpers/menuHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const putMenuController = new putMenuController_1.PutMenuController(service);
function putMenuRoute(router) {
    router.put("/v1/menu/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), putMenuController.run.bind(putMenuController));
}
//# sourceMappingURL=putMenu.js.map