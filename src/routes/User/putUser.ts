import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutUserController } from "../../controllers/userControllers/putUserController";
import { userService } from "../../service/userService";
import { userHelper } from "../../helpers/userHelper";

const helper = new userHelper()
const service = new userService(helper)
const putUserController = new PutUserController(service)

export function putUserRoute (router: Router) { 
    router.post("/v1/users", new UserMiddleware().run, putUserController.run.bind(putUserController))
}