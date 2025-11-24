"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDishRoute = deleteDishRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteDishController_1 = require("../../controllers/dishControllers/deleteDishController");
const dishHelper_1 = require("../../helpers/dishHelper");
const dishService_1 = require("../../service/dishService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const user_orderHelper_1 = require("../../helpers/user_orderHelper");
const user_orderService_1 = require("../../service/user_orderService");
const helper = new dishHelper_1.dishHelper();
const uOrderHelper = new user_orderHelper_1.userOrderHelper();
const uOrderService = new user_orderService_1.userOrderService(uOrderHelper);
const service = new dishService_1.dishService(helper, uOrderService);
const deleteDishController = new deleteDishController_1.DeleteDishController(service);
function deleteDishRoute(router) {
    router.delete("/v1/dish/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), deleteDishController.run.bind(deleteDishController));
}
//# sourceMappingURL=deleteDish.js.map