
export class MenuNotFound extends Error {

    public menuId: string;

    constructor(id: string) {
        const message = `The menu with id ${id} can't be reached`
        super(message)
        this.menuId = id
        this.name = 'MenuNotFound'
    }
}