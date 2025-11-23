import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutOrderController } from "../../controllers/orderControllers/putOrderController";
import { orderService } from "../../service/orderService";
import { orderHelper } from "../../helpers/orderHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const service = new orderService(helper)
const putOrderController = new PutOrderController(service)

export function putOrderRoute(router: Router) {
    router.put("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER", "ADMIN"]), putOrderController.run.bind(putOrderController))
}