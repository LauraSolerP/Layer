"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserController = void 0;
class GetUserController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const id = res.locals.userId;
        try {
            const user = await this.service.findUserById(id);
            const { password, ...safeUser } = user;
            return res.status(200).json({
                ok: true,
                user: safeUser
            });
        }
        catch (error) {
            if (error.name === "UserNotFound") {
                return res.status(404).json({
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
exports.GetUserController = GetUserController;
//# sourceMappingURL=getUserController.js.map