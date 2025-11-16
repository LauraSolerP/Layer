import { Router } from "express";
import { PostUserController } from "../controllers/postUserController";

export function postUserRoute (router: Router) {
    router.post("/v1/users", new PostUserController().run)
}