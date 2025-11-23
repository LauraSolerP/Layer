import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchOrderDeliveryController } from "../../controllers/orderControllers/patchOrderDeliveryController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const service = new orderService(helper)
const patchOrderDeliveryController = new PatchOrderDeliveryController(service)

export function patchOrderDeliveryRoute(router: Router) {
    router.patch("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchOrderDeliveryController.run.bind(patchOrderDeliveryController))
}