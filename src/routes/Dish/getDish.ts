import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetDishController } from "../../controllers/dishControllers/getDishController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";

const helper = new dishHelper()
const service = new dishService(helper)
const getDishController = new GetDishController(service)

export function getDishRoute(router: Router) {
    router.get("/v1/dish/:id", new UserMiddleware().run, getDishController.run.bind(getDishController))
}