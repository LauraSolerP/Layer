import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchDishController } from "../../controllers/dishControllers/patchDishController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new dishHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new dishService(helper, uOrderService)
const patchDishController = new PatchDishController(service)

export function patchDishRoute(router: Router) {
    router.patch("/v1/dish/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchDishController.run.bind(patchDishController))
}