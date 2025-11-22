import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteDishController } from "../../controllers/dishControllers/deleteDishController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new dishHelper()
const service = new dishService(helper)
const deleteDishController = new DeleteDishController(service)

export function deleteDishRoute(router: Router) {
    router.delete("/v1/dish/:id", new UserMiddleware().run, requireRole(["OWNER"]), deleteDishController.run.bind(deleteDishController))
}