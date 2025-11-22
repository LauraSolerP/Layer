import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetDishesController } from "../../controllers/dishControllers/getDishesController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";

const helper = new dishHelper()
const service = new dishService(helper)
const getDishesController = new GetDishesController(service)

export function getDishRoute(router: Router) {
    router.get("/v1/dish", new UserMiddleware().run, getDishesController.run.bind(getDishesController))
}