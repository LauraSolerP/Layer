import { Router } from "express";
import { UserMiddleware } from "../middlewares/userMiddleware";
import { DeleteUserController } from "../controllers/deleteUserController";

export function deleteUserRoute (router: Router){
    router.delete("/v1/users/:id", new UserMiddleware().run, new DeleteUserController().run)
}