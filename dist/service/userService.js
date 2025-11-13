"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userNotFound_1 = require("../errors/user/userNotFound");
class userService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findUserById(id) {
        const user = await this.helper.findUserById(id);
        if (!user) {
            throw new userNotFound_1.UserNotFound(`The user with id ${id} can't be reach`);
        }
        return user;
    }
}
exports.userService = userService;
//# sourceMappingURL=userService.js.map