"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchDishPriceRoute = patchDishPriceRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchDishPriceController_1 = require("../../controllers/dishControllers/patchDishPriceController");
const dishHelper_1 = require("../../helpers/dishHelper");
const dishService_1 = require("../../service/dishService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const patchDishPriceController = new patchDishPriceController_1.PatchDishPriceController(service);
function patchDishPriceRoute(router) {
    router.patch("/v1/dish/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchDishPriceController.run.bind(patchDishPriceController));
}
//# sourceMappingURL=patchDishPrice.js.map