import { NextFunction, Request, Response } from "express";
export declare class UserMiddleware {
    run(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=userMiddleware.d.ts.map