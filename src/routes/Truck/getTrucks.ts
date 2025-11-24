import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetTrucksController } from "../../controllers/truckControllers/getTrucksController";
import { truckHelper } from "../../helpers/truckHelper";
import { truckService } from "../../service/truckService";

const helper = new truckHelper()
const service = new truckService(helper)
const getTrucksController = new GetTrucksController(service)

export function getTrucksRoute(router: Router) {
    router.get("/v1/trucks", new UserMiddleware().run, getTrucksController.run.bind(getTrucksController))
}