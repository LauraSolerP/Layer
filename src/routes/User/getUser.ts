import { Router } from "express";
import { UserMiddleware } from "../middlewares/userMiddleware";
import { GetUserController } from "../controllers/getUserController";

export function getUserRoute (router: Router) { 
    router.get("/v1/users/:id", new UserMiddleware().run, new GetUserController().run)
}