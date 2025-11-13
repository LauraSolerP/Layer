import { Router } from "express"
import { getHealthRoute } from "./health"
import { getMeRoute } from "./getMe"

export function registerRoutes (): Router {
    const router = Router()
    
    getHealthRoute(router)
    getMeRoute(router)

    return router
}