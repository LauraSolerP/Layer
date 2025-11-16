import { Router } from "express";
import { UserMiddleware } from "../middlewares/userMiddleware";
import { PutUserController } from "../controllers/putUserController";

export function putUserRoute (router: Router) {
    router.put("/v1/users", new UserMiddleware().run, new PutUserController().run)
}