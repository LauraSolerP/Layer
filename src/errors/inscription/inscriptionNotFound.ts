
export class InscriptionNotFound extends Error {

    public inscriptionId: string;

    constructor(id: string) {
        const message = `The inscription with id ${id} can't be reached`
        super(message)
        this.inscriptionId = id
        this.name = 'InscriptionNotFound'
    }
}