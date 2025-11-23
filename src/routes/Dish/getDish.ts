import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetDishController } from "../../controllers/dishControllers/getDishController";
import { dishHelper } from "../../helpers/dishHelper";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { dishService } from "../../service/dishService";
import { userOrderService } from "../../service/user_orderService";

const helper = new dishHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new dishService(helper, uOrderService)
const getDishController = new GetDishController(service)

export function getDishRoute(router: Router) {
    router.get("/v1/dish/:id", new UserMiddleware().run, getDishController.run.bind(getDishController))
}