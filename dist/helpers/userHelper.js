"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHelper = void 0;
const helper_1 = require("./helper");
const user_model_1 = require("../model/user.model");
class userHelper extends helper_1.Helper {
    getEntitySchema() {
        return user_model_1.UserModel;
    }
    async findUserById(id) {
        return (await this.getRepository()).findOneBy({ id });
    }
}
exports.userHelper = userHelper;
//# sourceMappingURL=userHelper.js.map