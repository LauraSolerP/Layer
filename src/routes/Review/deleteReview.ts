import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteReviewController } from "../../controllers/reviewControllers/deleteReviewController";
import { reviewHelper } from "../../helpers/reviewHelper";
import { reviewService } from "../../service/reviewService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new reviewHelper()
const service = new reviewService(helper)
const deleteReviewController = new DeleteReviewController(service)

export function deleteReviewRoute(router: Router) {
    router.delete("/v1/review/:id", new UserMiddleware().run, requireRole(["ADMIN", "CLIENT"]), deleteReviewController.run.bind(deleteReviewController))
}