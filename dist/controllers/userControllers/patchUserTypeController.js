"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUserTypeController = void 0;
class PatchUserTypeController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const id = res.locals.userId;
        const { type } = req.body;
        try {
            await this.service.updateUser(id, type);
            return res.status(200).json({
                ok: true,
                message: "User updated successfully"
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
exports.PatchUserTypeController = PatchUserTypeController;
//# sourceMappingURL=patchUserTypeController.js.map