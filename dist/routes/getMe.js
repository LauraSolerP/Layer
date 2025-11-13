"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeRoute = getMeRoute;
const getMeController_1 = require("../controllers/getMeController");
const userMiddleware_1 = require("../middlewares/userMiddleware");
function getMeRoute(router) {
    router.get("/v1/me", new userMiddleware_1.UserMiddleware().run, new getMeController_1.GetMeController().run);
}
//# sourceMappingURL=getMe.js.map