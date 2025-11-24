"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DishNotFound = void 0;
class DishNotFound extends Error {
    dishId;
    constructor(id) {
        const message = `The dish with id ${id} can't be reached`;
        super(message);
        this.dishId = id;
        this.name = 'DishNotFound';
    }
}
exports.DishNotFound = DishNotFound;
//# sourceMappingURL=dishNotFound.js.map