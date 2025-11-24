"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostLoginUserController = void 0;
const tokenManagerService_1 = require("../../service/tokenManagerService");
class PostLoginUserController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        try {
            const user = await this.service.findUserByEmail(email, password);
            const token = await tokenManagerService_1.TokenManager.generate({ sub: user.id });
            return res.status(200).json({
                ok: true,
                data: {
                    token
                }
            });
        }
        catch (error) {
            if (error.name === "IncorrectPasswordOrMailError") {
                return res.status(401).json({
                    ok: false,
                    message: error.message
                });
            }
            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            });
        }
    }
}
exports.PostLoginUserController = PostLoginUserController;
//# sourceMappingURL=postLoginUserController.js.map