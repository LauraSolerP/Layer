import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchUserTypeController } from "../../controllers/userControllers/patchUserTypeController";
import { userService } from "../../service/userService";
import { userHelper } from "../../helpers/userHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new userHelper()
const service = new userService(helper)
const patchUserTypeController = new PatchUserTypeController(service)

export function patchUserTypeRoute(router: Router) {
    router.patch("/v1/users/:id", new UserMiddleware().run, requireRole(["ADMIN"]), patchUserTypeController.run.bind(patchUserTypeController))
}





trucu trucu