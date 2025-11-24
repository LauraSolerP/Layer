import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostOrderController } from "../../controllers/orderControllers/postOrderController";
import { orderService } from "../../service/orderService";
import { orderHelper } from "../../helpers/orderHelper";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new orderHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new orderService(helper, uOrderService)
const postOrderController = new PostOrderController(service)

export function postOrderRoute(router: Router) {
    router.post("/v1/order", new UserMiddleware().run, postOrderController.run.bind(postOrderController))
}