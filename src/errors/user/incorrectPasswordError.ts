
export class IncorrectPasswordError extends Error {


    constructor() {
        const message = "The email or password provided is incorrect"
        super(message)
        this.name = 'IncorrectPasswordError'
    }
}