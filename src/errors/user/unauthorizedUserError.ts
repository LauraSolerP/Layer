

export class UnauthorizedUserError extends Error {

    public userId: string;

    constructor(id: string) {
        const message = `The user with id ${id} is not authorized to perform this action`
        super(message)
        this.userId = id
        this.name = 'UnauthorizedUser'
    }
}