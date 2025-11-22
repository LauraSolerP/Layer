import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostDishController } from "../../controllers/dishControllers/postDishController";
import { dishService } from "../../service/dishService";
import { dishHelper } from "../../helpers/dishHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new dishHelper()
const service = new dishService(helper)
const postDishController = new PostDishController(service)

export function postDishRoute(router: Router) {
    router.post("/v1/dish", new UserMiddleware().run, requireRole(["OWNER"]), postDishController.run.bind(postDishController))
}