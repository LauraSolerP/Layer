import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetUserController } from "../../controllers/userControllers/getUserController";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new userHelper()
const service = new userService(helper)
const getUserController = new GetUserController(service)

export function getUserRoute(router: Router) {
    router.get("/v1/users/:id", new UserMiddleware().run, requireRole(["ADMIN"]), getUserController.run.bind(getUserController))
}