import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutReviewController } from "../../controllers/reviewControllers/putReviewController";
import { reviewService } from "../../service/reviewService";
import { reviewHelper } from "../../helpers/reviewHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new reviewHelper()
const service = new reviewService(helper)
const putReviewController = new PutReviewController(service)

export function putReviewRoute(router: Router) {
    router.put("/v1/review/:id", new UserMiddleware().run, requireRole(["ADMIN", "CLIENT"]), putReviewController.run.bind(putReviewController))
}