import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PostTruckController } from "../../controllers/truckControllers/postTruckController";
import { truckService } from "../../service/truckService";
import { truckHelper } from "../../helpers/truckHelper";
import { requireRole } from "../../middlewares/requireRoleMiddleware";

const helper = new truckHelper()
const service = new truckService(helper)
const postTruckController = new PostTruckController(service)

export function postTruckRoute(router: Router) {
    router.post("/v1/trucks", postTruckController.run.bind(postTruckController))
}



//new UserMiddleware().run, requireRole(["OWNER"]),