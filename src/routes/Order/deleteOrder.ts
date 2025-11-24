import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteOrderController } from "../../controllers/orderControllers/deleteOrderController";
import { orderHelper } from "../../helpers/orderHelper";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { orderService } from "../../service/orderService";
import { userOrderService } from "../../service/user_orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new orderService(helper, uOrderService)

const deleteOrderController = new DeleteOrderController(service)

export function deleteOrderRoute(router: Router) {
    router.delete("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER", "ADMIN"]), deleteOrderController.run.bind(deleteOrderController))
}