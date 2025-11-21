import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutMenuController } from "../../controllers/menuControllers/putMenuController";
import { menuService } from "../../service/menuService";
import { menuHelper } from "../../helpers/menuHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new menuHelper()
const service = new menuService(helper)
const putMenuController = new PutMenuController(service)

export function putMenuRoute(router: Router) {
    router.put("/v1/menu/:id", new UserMiddleware().run, requireRole(["OWNER"]), putMenuController.run.bind(putMenuController))
}