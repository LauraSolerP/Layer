
export class EventNotFound extends Error {

    public eventId: string;

    constructor(id: string) {
        const message = `The event with id ${id} can't be reached`
        super(message)
        this.eventId = id
        this.name = 'EventNotFound'
    }
}