
export class UserOrdersNotFound extends Error {

    constructor() {
        const message = `The user orders can't be reached`
        super(message)
        this.name = 'UserOrdersNotFound'
    }
}