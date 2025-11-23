import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetDishReservationCountController } from "../../controllers/dishControllers/getDishReservartionCountController";
import { dishHelper } from "../../helpers/dishHelper";
import { dishService } from "../../service/dishService";
import { userOrderHelper } from "../../helpers/user_orderHelper";
import { userOrderService } from "../../service/user_orderService";

const helper = new dishHelper()
const uOrderHelper = new userOrderHelper()
const uOrderService = new userOrderService(uOrderHelper)
const service = new dishService(helper, uOrderService)
const getDishReservationCountController = new GetDishReservationCountController(service)

export function getDishReservationCountRoute(router: Router) {
    router.get("/v1/dish/:id", new UserMiddleware().run, getDishReservationCountController.run.bind(getDishReservationCountController))
}