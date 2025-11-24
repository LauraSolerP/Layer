import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetOrdersController } from "../../controllers/orderControllers/getOrdersController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new orderHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new orderService(helper, uOrderService)
const getOrdersController = new GetOrdersController(service)

export function getOrdersRoute(router: Router) {
    router.get("/v1/order", new UserMiddleware().run, requireRole(["ADMIN", "OWNER"]), getOrdersController.run.bind(getOrdersController))
}