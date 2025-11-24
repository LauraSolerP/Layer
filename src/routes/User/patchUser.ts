import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchUserController } from "../../controllers/userControllers/patchUserController";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new userHelper()
const service = new userService(helper)
const patchUserController = new PatchUserController(service)

export function patchUserRoute(router: Router) {
    router.patch("/v1/users/:id", new UserMiddleware().run, patchUserController.run.bind(patchUserController))
}