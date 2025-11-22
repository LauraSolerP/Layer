
export class ReviewNotFound extends Error {

    public reviewId: string;

    constructor(id: string) {
        const message = `The review with id ${id} can't be reached`
        super(message)
        this.reviewId = id
        this.name = 'ReviewNotFound'
    }
}