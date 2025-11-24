"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUserPasswordRoute = patchUserPasswordRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchUserPasswordController_1 = require("../../controllers/userControllers/patchUserPasswordController");
const userService_1 = require("../../service/userService");
const userHelper_1 = require("../../helpers/userHelper");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const patchUserPasswordController = new patchUserPasswordController_1.PatchUserPasswordController(service);
function patchUserPasswordRoute(router) {
    router.patch("/v1/users/:id", new userMiddleware_1.UserMiddleware().run, patchUserPasswordController.run.bind(patchUserPasswordController));
}
//# sourceMappingURL=patchUserPassword.js.map