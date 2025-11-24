import { Entity } from "./entity";
export declare class DishMenu implements Entity {
    readonly id: string;
    readonly menuId: string;
    readonly dishId: string;
    constructor(id: string, menuId: string, dishId: string);
    getPrimitive(): {
        id: string;
        menuId: string;
        dishId: string;
    };
    static create(menuId: string, dishId: string): DishMenu;
    update(data: {
        menuId?: string | undefined;
        dishId?: string | undefined;
    }): DishMenu;
}
//# sourceMappingURL=dish_menu.d.ts.map