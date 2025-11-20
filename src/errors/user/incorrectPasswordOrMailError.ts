
export class IncorrectPasswordOrMailError extends Error {


    constructor() {
        const message = "The email or password provided is incorrect"
        super(message)
        this.name = 'IncorrectPasswordOrMailError'
    }
}