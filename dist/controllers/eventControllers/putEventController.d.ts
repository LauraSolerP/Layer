import { Request, Response } from "express";
import { eventService } from "../../service/eventService";
export declare class PutEventController {
    private readonly service;
    constructor(service: eventService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=putEventController.d.ts.map