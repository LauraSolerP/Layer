"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishMenuNotFound = void 0;
class DishMenuNotFound extends Error {
    dishMenuId;
    constructor(id) {
        const message = `The dish-menu relationship with id ${id} can't be reached`;
        super(message);
        this.dishMenuId = id;
        this.name = 'DishMenuNotFound';
    }
}
exports.DishMenuNotFound = DishMenuNotFound;
//# sourceMappingURL=dishMenuNotFound.js.map