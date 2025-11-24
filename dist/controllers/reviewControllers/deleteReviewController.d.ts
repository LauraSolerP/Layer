import { Request, Response } from "express";
import { reviewService } from "../../service/reviewService";
export declare class DeleteReviewController {
    private readonly service;
    constructor(service: reviewService);
    run(req: Request, res: Response): Promise<Response>;
}
//# sourceMappingURL=deleteReviewController.d.ts.map