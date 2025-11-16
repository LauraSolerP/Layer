import { Request, Response, NextFunction } from "express";

export function requireRole(allowedRoles: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const userType = res.locals.userType;
        
        if (!allowedRoles.includes(userType)) {
            return res.status(403).json({
                ok: false,
                message: "Accés denegat: no tens els permisos suficients"
            })
        }
        next()
    }
}
