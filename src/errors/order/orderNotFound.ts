
export class OrderNotFound extends Error {

    public orderId: string;

    constructor(id: string) {
        const message = `The order with id ${id} can't be reached`
        super(message)
        this.orderId = id
        this.name = 'OrderNotFound'
    }
}