import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchMenuPriceController } from "../../controllers/menuControllers/patchMenuPriceController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new menuHelper()
const service = new menuService(helper)
const patchMenuPriceController = new PatchMenuPriceController(service)

export function patchMenuPriceRoute(router: Router) {
    router.patch("/v1/menu/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchMenuPriceController.run.bind(patchMenuPriceController))
}