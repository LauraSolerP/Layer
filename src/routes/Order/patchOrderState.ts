import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchOrderStateController } from "../../controllers/orderControllers/patchOrderStateController";
import { orderHelper } from "../../helpers/orderHelper";
import { orderService } from "../../service/orderService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new orderHelper()
const service = new orderService(helper)
const patchOrderStateController = new PatchOrderStateController(service)

export function patchOrderStateRoute(router: Router) {
    router.patch("/v1/order/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchOrderStateController.run.bind(patchOrderStateController))
}