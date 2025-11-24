import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetOrderController } from "../../controllers/orderControllers/getOrderController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new orderHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new orderService(helper, uOrderService)
const getOrderController = new GetOrderController(service)

export function getOrderRoute(router: Router) {
    router.get("/v1/order/:id", new UserMiddleware().run, getOrderController.run.bind(getOrderController))
}