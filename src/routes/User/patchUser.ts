import { Router } from "express";
import { UserMiddleware } from "../middlewares/userMiddleware";
import { PatchUserController } from "../controllers/patchUserController";

export function patchUserRoute (router: Router) { 
    router.patch("/v1/users/:id", new UserMiddleware().run, new PatchUserController().run)
}