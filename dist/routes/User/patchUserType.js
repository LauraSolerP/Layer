"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUserTypeRoute = patchUserTypeRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchUserTypeController_1 = require("../../controllers/userControllers/patchUserTypeController");
const userService_1 = require("../../service/userService");
const userHelper_1 = require("../../helpers/userHelper");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const patchUserTypeController = new patchUserTypeController_1.PatchUserTypeController(service);
function patchUserTypeRoute(router) {
    router.patch("/v1/users/:id", new userMiddleware_1.UserMiddleware().run, patchUserTypeController.run.bind(patchUserTypeController));
}
//# sourceMappingURL=patchUserType.js.map