import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { DeleteTruckController } from "../../controllers/truckControllers/deleteTruckController";
import { truckHelper } from "../../helpers/truckHelper";
import { truckService } from "../../service/truckService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new truckHelper()
const service = new truckService(helper)
const deleteTruckController = new DeleteTruckController(service)

export function deleteTruckRoute(router: Router) {
    router.delete("/v1/trucks/:id", new UserMiddleware().run, requireRole(["OWNER"]), deleteTruckController.run.bind(deleteTruckController))
}