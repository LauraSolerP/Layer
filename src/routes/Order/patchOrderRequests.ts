import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchOrderRequestsController } from "../../controllers/orderControllers/patchOrderRequestsController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const service = new orderService(helper)
const patchOrderRequestsController = new PatchOrderRequestsController(service)

export function patchOrderRequestsRoute(router: Router) {
    router.patch("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchOrderRequestsController.run.bind(patchOrderRequestsController))
}