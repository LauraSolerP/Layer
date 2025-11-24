import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { GetTruckController } from "../../controllers/truckControllers/getTruckController";
import { truckHelper } from "../../helpers/truckHelper";
import { truckService } from "../../service/truckService";

const helper = new truckHelper()
const service = new truckService(helper)
const getTruckController = new GetTruckController(service)

export function getTruckRoute(router: Router) {
    router.get("/v1/trucks/:id", new UserMiddleware().run, getTruckController.run.bind(getTruckController))
}