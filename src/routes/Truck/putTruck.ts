import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PutTruckController } from "../../controllers/truckControllers/putTruckController";
import { truckService } from "../../service/truckService";
import { truckHelper } from "../../helpers/truckHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new truckHelper()
const service = new truckService(helper)
const putTruckController = new PutTruckController(service)

export function putTruckRoute(router: Router) {
    router.put("/v1/trucks/:id", new UserMiddleware().run, requireRole(["OWNER"]), putTruckController.run.bind(putTruckController))
}