
export class DishMenuNotFound extends Error {

    public dishMenuId: string;

    constructor(id: string) {
        const message = `The dish-menu relationship with id ${id} can't be reached`
        super(message)
        this.dishMenuId = id
        this.name = 'DishMenuNotFound'
    }
}