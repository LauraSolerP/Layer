"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const dataSource_1 = __importDefault(require("../dataSource"));
class Helper {
    async getDatabaseConnection() {
        return await dataSource_1.default;
    }
    async getRepository() {
        return (await this.getDatabaseConnection()).getRepository(this.getEntitySchema());
    }
}
exports.Helper = Helper;
//# sourceMappingURL=helper.js.map