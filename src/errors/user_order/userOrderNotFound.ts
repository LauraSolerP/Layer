
export class UserOrderNotFound extends Error {

    public userOrderId: string;

    constructor(id: string) {
        const message = `The user order with id ${id} can't be reached`
        super(message)
        this.userOrderId = id
        this.name = 'UserOrderNotFound'
    }
}