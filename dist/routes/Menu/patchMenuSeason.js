"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchMenuSeasonRoute = patchMenuSeasonRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const patchMenuSeasonController_1 = require("../../controllers/menuControllers/patchMenuSeasonController");
const menuHelper_1 = require("../../helpers/menuHelper");
const menuService_1 = require("../../service/menuService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new menuHelper_1.menuHelper();
const service = new menuService_1.menuService(helper);
const patchMenuSeasonController = new patchMenuSeasonController_1.PatchMenuSeasonController(service);
function patchMenuSeasonRoute(router) {
    router.patch("/v1/menu/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), patchMenuSeasonController.run.bind(patchMenuSeasonController));
}
//# sourceMappingURL=patchMenuSeason.js.map