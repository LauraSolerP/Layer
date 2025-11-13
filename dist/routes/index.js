"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const express_1 = require("express");
const health_1 = require("./health");
const getMe_1 = require("./getMe");
function registerRoutes() {
    const router = (0, express_1.Router)();
    (0, health_1.getHealthRoute)(router);
    (0, getMe_1.getMeRoute)(router);
    return router;
}
//# sourceMappingURL=index.js.map