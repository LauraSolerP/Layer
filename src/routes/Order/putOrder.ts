import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutOrderController } from "../../controllers/orderControllers/putOrderController";
import { orderService } from "../../service/orderService";
import { orderHelper } from "../../helpers/orderHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new orderHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new orderService(helper, uOrderService)
const putOrderController = new PutOrderController(service)

export function putOrderRoute(router: Router) {
    router.put("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER", "ADMIN"]), putOrderController.run.bind(putOrderController))
}