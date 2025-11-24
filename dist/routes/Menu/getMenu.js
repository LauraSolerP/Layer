"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenuRoute = getMenuRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getMenuController_1 = require("../../controllers/menuControllers/getMenuController");
const menuHelper_1 = require("../../helpers/menuHelper");
const menuService_1 = require("../../service/menuService");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const getMenuController = new getMenuController_1.GetMenuController(service);
function getMenuRoute(router) {
    router.get("/v1/menu/:id", new userMiddleware_1.UserMiddleware().run, getMenuController.run.bind(getMenuController));
}
//# sourceMappingURL=getMenu.js.map