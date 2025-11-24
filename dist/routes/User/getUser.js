"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRoute = getUserRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getUserController_1 = require("../../controllers/userControllers/getUserController");
const userHelper_1 = require("../../helpers/userHelper");
const userService_1 = require("../../service/userService");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const getUserController = new getUserController_1.GetUserController(service);
function getUserRoute(router) {
    router.get("/v1/users/:id", new userMiddleware_1.UserMiddleware().run, getUserController.run.bind(getUserController));
}
//# sourceMappingURL=getUser.js.map