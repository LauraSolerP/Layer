import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetMenuController } from "../../controllers/menuControllers/getMenuController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)
const getMenuController = new GetMenuController(service)

export function getMenuRoute(router: Router) {
    router.get("/v1/menu/:id", new UserMiddleware().run, getMenuController.run.bind(getMenuController))
}