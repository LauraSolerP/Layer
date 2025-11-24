"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetDishReservationCountController = void 0;
class GetDishReservationCountController {
    service;
    constructor(service) {
        this.service = service;
    }
    async run(req, res) {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                ok: false,
                message: "Missing dish id"
            });
        }
        try {
            const reservationCount = await this.service.getDishReservationCount(id);
            return res.status(200).json({
                ok: true,
                reservationCount: reservationCount
            });
        }
        catch (error) {
            return res.status(500).json({
                ok: false,
                message: "Server internal error",
                error: error.message
            });
        }
    }
}
exports.GetDishReservationCountController = GetDishReservationCountController;
//# sourceMappingURL=getDishReservartionCountController.js.map