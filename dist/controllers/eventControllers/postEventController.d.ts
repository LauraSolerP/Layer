import { Request, Response } from "express";
import { eventService } from "../../service/eventService";
export declare class PostEventController {
    private readonly service;
    constructor(service: eventService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=postEventController.d.ts.map