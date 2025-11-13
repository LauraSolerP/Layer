"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHealthRoute = getHealthRoute;
const getHealthController_1 = require("../controllers/getHealthController");
function getHealthRoute(router) {
    router.get("/v1/health", new getHealthController_1.GetHealthController().run);
}
//# sourceMappingURL=health.js.map