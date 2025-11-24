"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUserPasswordController = void 0;
class PatchUserPasswordController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const id = res.locals.userId;
        const { password } = req.body;
        try {
            await this.service.updateUser(id, password);
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
exports.PatchUserPasswordController = PatchUserPasswordController;
//# sourceMappingURL=patchUserPasswordController.js.map