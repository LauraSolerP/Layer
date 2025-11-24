"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = requireRole;
function requireRole(allowedRoles) {
    return (req, res, next) => {
        const userType = res.locals.userType;
        if (!allowedRoles.includes(userType)) {
            return res.status(403).json({
                ok: false,
                message: "Accés denegat: no tens els permisos suficients"
            });
        }
        next();
    };
}
//# sourceMappingURL=requireRoleMiddleware.js.map