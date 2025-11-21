import { Router } from "express";
import { PostLoginUserController } from "../../controllers/userControllers/postLoginUserController"
import { userService } from "../../service/userService"
import { userHelper } from "../../helpers/userHelper"

const helper = new userHelper()
const service = new userService(helper)
const postLoginUserController = new PostLoginUserController(service)

export function postUserLoginRoute(router: Router) {
    router.post("/v1/login", postLoginUserController.run.bind(postLoginUserController))
}