import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetReviewController } from "../../controllers/reviewControllers/getReviewController";
import { reviewHelper } from "../../helpers/reviewHelper";
import { reviewService } from "../../service/reviewService";

const helper = new reviewHelper()
const service = new reviewService(helper)
const getReviewController = new GetReviewController(service)

export function getReviewRoute(router: Router) {
    router.get("/v1/review/:id", new UserMiddleware().run, getReviewController.run.bind(getReviewController))
}