"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReviewRoute = postReviewRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const postReviewController_1 = require("../../controllers/reviewControllers/postReviewController");
const reviewService_1 = require("../../service/reviewService");
const reviewHelper_1 = require("../../helpers/reviewHelper");
const helper = new reviewHelper_1.reviewHelper();
const service = new reviewService_1.reviewService(helper);
const postReviewController = new postReviewController_1.PostReviewController(service);
function postReviewRoute(router) {
    router.post("/v1/review", new userMiddleware_1.UserMiddleware().run, postReviewController.run.bind(postReviewController));
}
//# sourceMappingURL=postReview.js.map