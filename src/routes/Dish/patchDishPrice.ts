import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchDishPriceController } from "../../controllers/dishControllers/patchDishPriceController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new dishHelper()
const service = new dishService(helper)
const patchDishPriceController = new PatchDishPriceController(service)

export function patchDishPriceRoute(router: Router) {
    router.patch("/v1/dish/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchDishPriceController.run.bind(patchDishPriceController))
}