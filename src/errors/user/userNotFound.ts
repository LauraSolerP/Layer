
export class UserNotFound extends Error {

    public userId: string;

    constructor(id: string) {
        const message = `The user with id ${id} can't be reached`
        super(message)
        this.userId = id
        this.name = 'UserNotFound'
    }
}