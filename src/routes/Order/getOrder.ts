import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetOrderController } from "../../controllers/orderControllers/getOrderController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";

const helper = new orderHelper()
const service = new orderService(helper)
const getOrderController = new GetOrderController(service)

export function getOrderRoute(router: Router) {
    router.get("/v1/order/:id", new UserMiddleware().run, getOrderController.run.bind(getOrderController))
}