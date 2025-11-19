
export class ExistingEmailError extends Error {

    public email: string;

    constructor(email: string) {
        const message = `A user with the email ${email} already exists`
        super(message)
        this.email = email
        this.name = 'ExistingEmailError'
    }
}