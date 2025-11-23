import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteOrderController } from "../../controllers/orderControllers/deleteOrderController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const service = new orderService(helper)
const deleteOrderController = new DeleteOrderController(service)

export function deleteOrderRoute(router: Router) {
    router.delete("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER"]), deleteOrderController.run.bind(deleteOrderController))
}