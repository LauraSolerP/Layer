import { v4 } from "uuid"
import { Entity } from "./entity"


export class DishMenu implements Entity {
    constructor(
        readonly id: string,
        readonly menuId: string,
        readonly dishId: string
    ) { }

    getPrimitive() {
        return {
            id: this.id,
            menuId: this.menuId,
            dishId: this.dishId
        }
    }

    static create(id: string, menuId: string, dishId: string): DishMenu {
        return new DishMenu(
            id = v4(),
            menuId,
            dishId)
    }

    update(data: { menuId?: string | undefined, dishId?: string | undefined }): DishMenu {
        return new DishMenu(
            this.id,
            data.menuId ?? this.menuId,
            data.dishId ?? this.dishId
        )
    }

}