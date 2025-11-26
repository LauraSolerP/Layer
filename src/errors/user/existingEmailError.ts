
export class ExistingEmailError extends Error {

    constructor() {
        const message = `A user with this email already exists`
        super(message)
        this.name = 'ExistingEmailError'
    }
}