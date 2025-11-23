import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetOrdersController } from "../../controllers/orderControllers/getOrdersController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";

const helper = new orderHelper()
const service = new orderService(helper)
const getOrdersController = new GetOrdersController(service)

export function getOrdersRoute(router: Router) {
    router.get("/v1/order", new UserMiddleware().run, getOrdersController.run.bind(getOrdersController))
}