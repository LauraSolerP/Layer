import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchTruckOwnerController } from "../../controllers/truckControllers/patchTruckOwnerController";
import { truckHelper } from "../../helpers/truckHelper";
import { truckService } from "../../service/truckService";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new truckHelper()
const service = new truckService(helper)
const patchTruckOwnerController = new PatchTruckOwnerController(service)

export function patchTruckOwnerRoute(router: Router) {
    router.patch("/v1/trucks/:id", new UserMiddleware().run, requireRole(["OWNER"]), patchTruckOwnerController.run.bind(patchTruckOwnerController))
}