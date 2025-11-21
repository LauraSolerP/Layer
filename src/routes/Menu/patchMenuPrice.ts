import { Router } from "express";
import { UserMiddleware } from "../../middlewares/userMiddleware";
import { PatchMenuPriceController } from "../../controllers/menuControllers/patchMenuPriceController";
import { menuHelper } from "../../helpers/menuHelper";
import { menuService } from "../../service/menuService";

const helper = new menuHelper()
const service = new menuService(helper)
const patchMenuPriceController = new PatchMenuPriceController(service)

export function patchMenuPriceRoute(router: Router) {
    router.patch("/v1/menu/:id", new UserMiddleware().run, patchMenuPriceController.run.bind(patchMenuPriceController))
}