"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMeController = void 0;
const userService_1 = require("../service/userService");
const userHelper_1 = require("../helpers/userHelper");
const userNotFound_1 = require("../errors/user/userNotFound");
class GetMeController {
    async run(req, res) {
        try {
            const userId = res.locals.userId;
            const service = new userService_1.userService(new userHelper_1.userHelper());
            const user = await service.findUserById(userId);
            return res.status(200).json({
                ok: true,
                data: user
            });
        }
        catch (e) {
            if (e instanceof userNotFound_1.UserNotFound)
                return res.status(404).send();
            return res.status(500).send();
        }
    }
}
exports.GetMeController = GetMeController;
//# sourceMappingURL=getMeController.js.map