"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReviewRoute = deleteReviewRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const deleteReviewController_1 = require("../../controllers/reviewControllers/deleteReviewController");
const reviewHelper_1 = require("../../helpers/reviewHelper");
const reviewService_1 = require("../../service/reviewService");
const requireRoleMiddleware_1 = require("../../middlewares/requireRoleMiddleware");
const helper = new reviewHelper_1.reviewHelper();
const service = new reviewService_1.reviewService(helper);
const deleteReviewController = new deleteReviewController_1.DeleteReviewController(service);
function deleteReviewRoute(router) {
    router.delete("/v1/review/:id", new userMiddleware_1.UserMiddleware().run, (0, requireRoleMiddleware_1.requireRole)(["OWNER"]), deleteReviewController.run.bind(deleteReviewController));
}
//# sourceMappingURL=deleteReview.js.map