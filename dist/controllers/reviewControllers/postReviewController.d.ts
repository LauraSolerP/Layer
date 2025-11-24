import { Request, Response } from "express";
import { reviewService } from "../../service/reviewService";
export declare class PostReviewController {
    private readonly service;
    constructor(service: reviewService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=postReviewController.d.ts.map