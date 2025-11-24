"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserRoute = deleteUserRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteUserController_1 = require("../../controllers/userControllers/deleteUserController");
const userHelper_1 = require("../../helpers/userHelper");
const userService_1 = require("../../service/userService");
const helper = new userHelper_1.userHelper();
const service = new userService_1.userService(helper);
const deleteUserController = new deleteUserController_1.DeleteUserController(service);
function deleteUserRoute(router) {
    router.delete("/v1/users/:id", new userMiddleware_1.UserMiddleware().run, deleteUserController.run.bind(deleteUserController));
}
//# sourceMappingURL=deleteUser.js.map