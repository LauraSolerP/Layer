"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMenuRoute = postMenuRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const postMenuController_1 = require("../../controllers/menuControllers/postMenuController");
const menuService_1 = require("../../service/menuService");
const menuHelper_1 = require("../../helpers/menuHelper");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const postMenuController = new postMenuController_1.PostMenuController(service);
function postMenuRoute(router) {
    router.post("/v1/menu", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), postMenuController.run.bind(postMenuController));
}
//# sourceMappingURL=postMenu.js.map