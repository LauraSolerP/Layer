"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putReviewRoute = putReviewRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const putReviewController_1 = require("../../controllers/reviewControllers/putReviewController");
const reviewService_1 = require("../../service/reviewService");
const reviewHelper_1 = require("../../helpers/reviewHelper");
const helper = new reviewHelper_1.reviewHelper();
const service = new reviewService_1.reviewService(helper);
const putReviewController = new putReviewController_1.PutReviewController(service);
function putReviewRoute(router) {
    router.put("/v1/review/:id", new userMiddleware_1.UserMiddleware().run, putReviewController.run.bind(putReviewController));
}
//# sourceMappingURL=putReview.js.map