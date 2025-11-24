"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMenusRoute = getMenusRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getMenusController_1 = require("../../controllers/menuControllers/getMenusController");
const menuHelper_1 = require("../../helpers/menuHelper");
const menuService_1 = require("../../service/menuService");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const getMenusController = new getMenusController_1.GetMenusController(service);
function getMenusRoute(router) {
    router.get("/v1/menu", new userMiddleware_1.UserMiddleware().run, getMenusController.run.bind(getMenusController));
}
//# sourceMappingURL=getMenus.js.map