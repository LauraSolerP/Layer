import { Router } from "express";
import { PostUserController } from "../../controllers/userControllers/postUserController";
import { userService } from "../../service/userService";
import { userHelper } from "../../helpers/userHelper";

const helper = new userHelper()
const service = new userService(helper)
const postUserController = new PostUserController(service)

export function postUserRoute(router: Router) {
    router.post("/v1/users", postUserController.run.bind(postUserController))
}