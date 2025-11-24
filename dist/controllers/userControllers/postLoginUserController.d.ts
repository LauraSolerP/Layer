import { Response, Request } from "express";
import { userService } from "../../service/userService";
export declare class PostLoginUserController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=postLoginUserController.d.ts.map