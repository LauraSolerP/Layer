"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchMenuPriceRoute = patchMenuPriceRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchMenuPriceController_1 = require("../../controllers/menuControllers/patchMenuPriceController");
const menuHelper_1 = require("../../helpers/menuHelper");
const menuService_1 = require("../../service/menuService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const patchMenuPriceController = new patchMenuPriceController_1.PatchMenuPriceController(service);
function patchMenuPriceRoute(router) {
    router.patch("/v1/menu/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchMenuPriceController.run.bind(patchMenuPriceController));
}
//# sourceMappingURL=patchMenuPrice.js.map