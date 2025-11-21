import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchMenuSeasonController } from "../../controllers/menuControllers/patchMenuSeasonController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new menuHelper()
const service = new menuService(helper)
const patchMenuSeasonController = new PatchMenuSeasonController(service)

export function patchMenuSeasonRoute(router: Router) {
    router.patch("/v1/menu/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchMenuSeasonController.run.bind(patchMenuSeasonController))
}