import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchOrderPriceController } from "../../controllers/orderControllers/patchOrderPriceController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const service = new orderService(helper)
const patchOrderPriceController = new PatchOrderPriceController(service)

export function patchOrderPriceRoute(router: Router) {
    router.patch("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchOrderPriceController.run.bind(patchOrderPriceController))
}