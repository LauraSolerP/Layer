"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const dataSource_1 = __importDefault(require("./dataSource"));
exports.default = dataSource_1.default.initialize();
//# sourceMappingURL=dataSourceConnection.js.map