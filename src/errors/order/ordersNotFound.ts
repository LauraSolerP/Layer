
export class OrdersNotFound extends Error {

    constructor() {
        const message = `The orders can't be reached`
        super(message)
        this.name = 'OrdersNotFound'
    }
}