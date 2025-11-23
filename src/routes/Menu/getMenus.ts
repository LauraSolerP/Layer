import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetMenusController } from "../../controllers/menuControllers/getMenusController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)
const getMenusController = new GetMenusController(service)

export function getMenusRoute(router: Router) {
    router.get("/v1/menu", new UserMiddleware().run, getMenusController.run.bind(getMenusController))
}