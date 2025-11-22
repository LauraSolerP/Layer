
export class TruckNotFound extends Error {

    public truckId: string;

    constructor(id: string) {
        const message = `The truck with id ${id} can't be reached`
        super(message)
        this.truckId = id
        this.name = 'TruckNotFound'
    }
}