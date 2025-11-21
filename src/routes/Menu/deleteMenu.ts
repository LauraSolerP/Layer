import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteMenuController } from "../../controllers/menuControllers/deleteMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new menuHelper()
const service = new menuService(helper)
const deleteMenuController = new DeleteMenuController(service)

export function deleteUserRoute(router: Router) {
    router.delete("/v1/menu/:id", new UserMiddleware().run, requireRole(["OWNER"]), deleteMenuController.run.bind(deleteMenuController))
}