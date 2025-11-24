"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuNotFound = void 0;
class MenuNotFound extends Error {
    menuId;
    constructor(id) {
        const message = `The menu with id ${id} can't be reached`;
        super(message);
        this.menuId = id;
        this.name = 'MenuNotFound';
    }
}
exports.MenuNotFound = MenuNotFound;
//# sourceMappingURL=menuNotFound.js.map