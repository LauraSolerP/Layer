"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserLoginRoute = postUserLoginRoute;
const postLoginUserController_1 = require("../../controllers/userControllers/postLoginUserController");
const userService_1 = require("../../service/userService");
const userHelper_1 = require("../../helpers/userHelper");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const postLoginUserController = new postLoginUserController_1.PostLoginUserController(service);
function postUserLoginRoute(router) {
    router.post("/v1/login", postLoginUserController.run.bind(postLoginUserController));
}
//# sourceMappingURL=postLogin.js.map