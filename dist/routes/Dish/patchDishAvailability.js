"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchDishAvailabilityRoute = patchDishAvailabilityRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchDishAvailabilityController_1 = require("../../controllers/dishControllers/patchDishAvailabilityController");
const dishHelper_1 = require("../../helpers/dishHelper");
const dishService_1 = require("../../service/dishService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const patchDishAvailabilityController = new patchDishAvailabilityController_1.PatchDishAvailabilityController(service);
function patchDishAvailabilityRoute(router) {
    router.patch("/v1/dish/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchDishAvailabilityController.run.bind(patchDishAvailabilityController));
}
//# sourceMappingURL=patchDishAvailability.js.map