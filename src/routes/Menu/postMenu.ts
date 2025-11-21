import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostMenuController } from "../../controllers/menuControllers/postMenuController";
import { menuService } from "../../service/menuService";
import { menuHelper } from "../../helpers/menuHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new menuHelper()
const service = new menuService(helper)
const postMenuController = new PostMenuController(service)

export function postMenuRoute(router: Router) {
    router.post("/v1/menu", new UserMiddleware().run, requireRole(["OWNER"]), postMenuController.run.bind(postMenuController))
}