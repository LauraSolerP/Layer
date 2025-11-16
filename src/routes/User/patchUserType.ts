import { Router } from "express";
import { UserMiddleware } from "../middlewares/userMiddleware";
import { PatchUserTypeController } from "../controllers/patchUserTypeController";

export function patchUserTypeRoute (router: Router) { 
    router.patch("/v1/users/:id", new UserMiddleware().run, new PatchUserTypeController().run)
}