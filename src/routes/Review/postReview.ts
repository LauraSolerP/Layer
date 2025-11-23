import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostReviewController } from "../../controllers/reviewControllers/postReviewController";
import { reviewService } from "../../service/reviewService";
import { reviewHelper } from "../../helpers/reviewHelper";

const helper = new reviewHelper()
const service = new reviewService(helper)
const postReviewController = new PostReviewController(service)

export function postReviewRoute(router: Router) {
    router.post("/v1/review", new UserMiddleware().run, postReviewController.run.bind(postReviewController))
}