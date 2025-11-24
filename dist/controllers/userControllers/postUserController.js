"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUserController = void 0;
class PostUserController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { name, surname, email, password, type } = req.body;
        try {
            await this.service.createUser(name, surname, email, password, type);
            return res.status(200).json({
                ok: true,
                message: "User created successfully"
            });
        }
        catch (error) {
            if (error.name === "ExistingEmailError") {
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
exports.PostUserController = PostUserController;
//# sourceMappingURL=postUserController.js.map