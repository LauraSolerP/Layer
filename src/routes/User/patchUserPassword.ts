import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchUserPasswordController } from "../../controllers/userControllers/patchUserPasswordController";
import { userService } from "../../service/userService";
import { userHelper } from "../../helpers/userHelper";

const helper = new userHelper()
const service = new userService(helper)
const patchUserPasswordController = new PatchUserPasswordController(service)

export function patchUserPasswordRoute (router: Router) { 
    router.patch("/v1/users/:id", new UserMiddleware().run, patchUserPasswordController.run.bind(patchUserPasswordController))
}