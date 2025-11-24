"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchUserRoute = patchUserRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchUserController_1 = require("../../controllers/userControllers/patchUserController");
const userHelper_1 = require("../../helpers/userHelper");
const userService_1 = require("../../service/userService");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const patchUserController = new patchUserController_1.PatchUserController(service);
function patchUserRoute(router) {
    router.patch("/v1/users/:id", new userMiddleware_1.UserMiddleware().run, patchUserController.run.bind(patchUserController));
}
//# sourceMappingURL=patchUser.js.map