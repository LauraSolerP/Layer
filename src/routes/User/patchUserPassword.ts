import { Router } from "express";
import { UserMiddleware } from "../middlewares/userMiddleware";
import { PatchUserPasswordController } from "../controllers/patchUserPasswordController";

export function patchUserPasswordRoute (router: Router) { 
    router.patch("/v1/users/:id", new UserMiddleware().run, new PatchUserPasswordController().run)
}