"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const body_parser_1 = require("body-parser");
class Server {
    app = (0, express_1.default)();
    init(port) {
        this.registerMiddlewares();
        this.registerRoutes();
        this.app.listen(port, () => {
            console.log(`Listening port ${port}`);
        });
    }
    registerRoutes() {
        this.app.use((0, routes_1.registerRoutes)());
    }
    registerMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, body_parser_1.json)());
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map