import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchOrderRequestsController } from "../../controllers/orderControllers/patchOrderRequestsController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new orderHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new orderService(helper, uOrderService)
const patchOrderRequestsController = new PatchOrderRequestsController(service)

export function patchOrderRequestsRoute(router: Router) {
    router.patch("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchOrderRequestsController.run.bind(patchOrderRequestsController))
}