
export class DishNotFound extends Error {

    public dishId: string;

    constructor(id: string) {
        const message = `The dish with id ${id} can't be reached`
        super(message)
        this.dishId = id
        this.name = 'DishNotFound'
    }
}