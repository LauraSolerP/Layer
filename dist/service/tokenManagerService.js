"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenManager = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// biome-ignore lint/complexity/noStaticOnlyClass: <explanation>
class TokenManager {
    static async generate(data) {
        return await jsonwebtoken_1.default.sign(data, "private", {
            algorithm: "HS256"
        });
    }
    static async verify(token) {
        return await jsonwebtoken_1.default.verify(token, "private", {
            algorithms: ["HS256"]
        });
    }
}
exports.TokenManager = TokenManager;
//# sourceMappingURL=tokenManagerService.js.map