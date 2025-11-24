import { Request, Response } from "express";
import { reviewService } from "../../service/reviewService";
export declare class PutReviewController {
    private readonly service;
    constructor(service: reviewService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=putReviewController.d.ts.map