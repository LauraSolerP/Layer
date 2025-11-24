"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_1 = require("../entities/user");
const userNotFound_1 = require("../errors/user/userNotFound");
const existingEmailError_1 = require("../errors/user/existingEmailError");
const incorrectPasswordOrMailError_1 = require("../errors/user/incorrectPasswordOrMailError");
class userService {
    helper;
    constructor(helper) {
        this.helper = helper;
    }
    async findUserById(id) {
        const user = await this.helper.findUserById(id);
        if (!user) {
            throw new userNotFound_1.UserNotFound(id);
        }
        return user;
    }
    async findUserByEmail(email, password) {
        const user = await this.helper.findUserByEmail(email);
        if (!user) {
            throw new incorrectPasswordOrMailError_1.IncorrectPasswordOrMailError();
        }
        if (password !== user.password) {
            throw new incorrectPasswordOrMailError_1.IncorrectPasswordOrMailError();
        }
        return user;
    }
    async createUser(name, surname, email, password, type) {
        const existing = await this.helper.findUserByEmail(email);
        if (existing) {
            throw new existingEmailError_1.ExistingEmailError(`The email ${email} is already in use`);
        }
        const user = user_1.User.create(name, surname, email, password, type);
        return this.helper.saveUser(user);
    }
    async updateUser(id, name, surname, email, password, type) {
        const existing = await this.findUserById(id);
        const updatedUser = existing.update({ name, surname, email, password, type });
        return this.helper.saveUser(updatedUser);
    }
    async deleteUser(id) {
        await this.findUserById(id);
        await this.helper.deleteUser(id);
    }
}
exports.userService = userService;
//# sourceMappingURL=userService.js.map