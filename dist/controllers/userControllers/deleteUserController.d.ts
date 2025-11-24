import { Request, Response } from "express";
import { userService } from "../../service/userService";
export declare class DeleteUserController {
    private readonly service;
    constructor(service: userService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=deleteUserController.d.ts.map