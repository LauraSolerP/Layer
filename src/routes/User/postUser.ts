import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostUserController } from "../../controllers/userControllers/postUserController";
import { userService } from "../../service/userService";
import { userHelper } from "../../helpers/userHelper";

const helper = new userHelper()
const service = new userService(helper)
const postUserController = new PostUserController(service)

export function postUserRoute (router: Router) { 
    router.post("/v1/users", new UserMiddleware().run, postUserController.run.bind(postUserController))
}