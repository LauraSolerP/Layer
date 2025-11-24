"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUserRoute = putUserRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putUserController_1 = require("../../controllers/userControllers/putUserController");
const userService_1 = require("../../service/userService");
const userHelper_1 = require("../../helpers/userHelper");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const putUserController = new putUserController_1.PutUserController(service);
function putUserRoute(router) {
    router.put("/v1/users/:id", new userMiddleware_1.UserMiddleware().run, putUserController.run.bind(putUserController));
}
//# sourceMappingURL=putUser.js.map