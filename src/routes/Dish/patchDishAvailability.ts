import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchDishAvailabilityController } from "../../controllers/dishControllers/patchDishAvailabilityController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new dishHelper()
const service = new dishService(helper)
const patchDishAvailabilityController = new PatchDishAvailabilityController(service)

export function patchDishAvailabilityRoute(router: Router) {
    router.patch("/v1/dish/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchDishAvailabilityController.run.bind(patchDishAvailabilityController))
}