"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const tokenManagerService_1 = require("../service/tokenManagerService");
class UserMiddleware {
    async run(req, res, next) {
        if (!req.headers.authorization || !req.headers.authorization.startsWith("Bearer ")) {
            return res.status(401).json({
                ok: false,
                message: "Unauthorized"
            });
        }
        const token = req.headers.authorization.replace("Bearer ", "");
        try {
            const userData = await tokenManagerService_1.TokenManager.verify(token);
            res.locals = {
                userId: userData.sub
            };
        }
        catch {
            return res.status(401).send();
        }
        next();
    }
}
exports.UserMiddleware = UserMiddleware;
//# sourceMappingURL=userMiddleware.js.map