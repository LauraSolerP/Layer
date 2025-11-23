import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetDishesController } from "../../controllers/dishControllers/getDishesController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new dishHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new dishService(helper, uOrderService)
const getDishesController = new GetDishesController(service)

export function getDishesRoute(router: Router) {
    router.get("/v1/dish", new UserMiddleware().run, getDishesController.run.bind(getDishesController))
}