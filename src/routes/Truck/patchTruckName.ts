import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchTruckNameController } from "../../controllers/truckControllers/patchTruckNameController";
import { truckHelper } from "../../helpers/truckHelper";
import { truckService } from "../../service/truckService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new truckHelper()
const service = new truckService(helper)
const patchTruckNameController = new PatchTruckNameController(service)

export function patchTruckNameRoute(router: Router) {
    router.patch("/v1/trucks/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchTruckNameController.run.bind(patchTruckNameController))
}