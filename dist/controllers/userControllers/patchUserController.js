"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchUserController = void 0;
class PatchUserController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const id = res.locals.userId;
        const { name, surname, email } = req.body;
        try {
            await this.service.updateUser(id, name, surname, email);
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
exports.PatchUserController = PatchUserController;
//# sourceMappingURL=patchUserController.js.map