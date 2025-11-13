"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const server_1 = require("./server");
(async () => {
    await new server_1.Server().init(3000);
})();
//# sourceMappingURL=main.js.map