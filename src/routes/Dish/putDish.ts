import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutDishController } from "../../controllers/dishControllers/putDishController";
import { dishService } from "../../service/dishService";
import { dishHelper } from "../../helpers/dishHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new dishHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new dishService(helper, uOrderService)
const putDishController = new PutDishController(service)

export function putDishRoute(router: Router) {
    router.put("/v1/dish/:id", new UserMiddleware().run, requireRole(["OWNER"]), putDishController.run.bind(putDishController))
}