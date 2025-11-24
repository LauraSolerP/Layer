"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewRoute = getReviewRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getReviewController_1 = require("../../controllers/reviewControllers/getReviewController");
const reviewHelper_1 = require("../../helpers/reviewHelper");
const reviewService_1 = require("../../service/reviewService");
const helper = new reviewHelper_1.reviewHelper();
const service = new reviewService_1.reviewService(helper);
const getReviewController = new getReviewController_1.GetReviewController(service);
function getReviewRoute(router) {
    router.get("/v1/review/:id", new userMiddleware_1.UserMiddleware().run, getReviewController.run.bind(getReviewController));
}
//# sourceMappingURL=getReview.js.map