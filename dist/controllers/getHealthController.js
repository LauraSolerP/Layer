"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHealthController = void 0;
class GetHealthController {
    async run(req, res) {
        return res.status(200).json({
            ok: true
        });
    }
}
exports.GetHealthController = GetHealthController;
//# sourceMappingURL=getHealthController.js.map