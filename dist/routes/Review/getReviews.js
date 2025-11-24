"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getReviewsRoute = getReviewsRoute;
const userMiddleware_1 = require("../../middlewares/userMiddleware");
const getReviewsController_1 = require("../../controllers/reviewControllers/getReviewsController");
const reviewHelper_1 = require("../../helpers/reviewHelper");
const reviewService_1 = require("../../service/reviewService");
const helper = new reviewHelper_1.reviewHelper();
const service = new reviewService_1.reviewService(helper);
const getReviewsController = new getReviewsController_1.GetReviewsController(service);
function getReviewsRoute(router) {
    router.get("/v1/review/:id", new userMiddleware_1.UserMiddleware().run, getReviewsController.run.bind(getReviewsController));
}
//# sourceMappingURL=getReviews.js.map