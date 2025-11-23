import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetReviewsController } from "../../controllers/reviewControllers/getReviewsController";
import { reviewHelper } from "../../helpers/reviewHelper";
import { reviewService } from "../../service/reviewService";

const helper = new reviewHelper()
const service = new reviewService(helper)
const getReviewsController = new GetReviewsController(service)

export function getReviewsRoute(router: Router) {
    router.get("/v1/review/:id", new UserMiddleware().run, getReviewsController.run.bind(getReviewsController))
}