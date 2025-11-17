import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteUserController } from "../../controllers/userControllers/deleteUserController";
import { userHelper } from "../../helpers/userHelper";
import { userService } from "../../service/userService";

const helper = new userHelper()
const service = new userService(helper)
const deleteUserController = new DeleteUserController(service)

export function deleteUserRoute (router: Router){
    router.delete("/v1/users/:id", new UserMiddleware().run, deleteUserController.run.bind(deleteUserController))
}