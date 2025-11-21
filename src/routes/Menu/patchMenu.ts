import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchMenuController } from "../../controllers/menuControllers/patchMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new menuHelper()
const service = new menuService(helper)
const patchMenuController = new PatchMenuController(service)

export function patchMenuRoute(router: Router) {
    router.patch("/v1/menu/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchMenuController.run.bind(patchMenuController))
}