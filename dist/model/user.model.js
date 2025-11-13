"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("../entities/user");
exports.UserModel = new typeorm_1.EntitySchema({
    name: "user",
    tableName: "user",
    target: user_1.User,
    columns: {
        id: {
            type: String,
            primary: true
        },
        nom: {
            type: String
        },
        cognom: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    }
});
//# sourceMappingURL=user.model.js.map