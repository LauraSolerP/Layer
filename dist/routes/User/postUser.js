"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUserRoute = postUserRoute;
const postUserController_1 = require("../../controllers/userControllers/postUserController");
const userService_1 = require("../../service/userService");
const userHelper_1 = require("../../helpers/userHelper");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const postUserController = new postUserController_1.PostUserController(service);
function postUserRoute(router) {
    router.post("/v1/users", postUserController.run.bind(postUserController));
}
//# sourceMappingURL=postUser.js.map