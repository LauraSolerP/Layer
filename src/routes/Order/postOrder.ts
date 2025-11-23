import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostOrderController } from "../../controllers/orderControllers/postOrderController";
import { orderService } from "../../service/orderService";
import { orderHelper } from "../../helpers/orderHelper";

const helper = new orderHelper()
const service = new orderService(helper)
const postOrderController = new PostOrderController(service)

export function postOrderRoute(router: Router) {
    router.post("/v1/order", new UserMiddleware().run, postOrderController.run.bind(postOrderController))
}