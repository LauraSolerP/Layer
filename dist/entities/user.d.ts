import { Entity } from "./entity";
export declare class User implements Entity {
    readonly id: string;
    readonly nom: string;
    readonly cognom: string;
    readonly email: string;
    readonly password: string;
    constructor(id: string, nom: string, cognom: string, email: string, password: string);
    getPrimitive(): {
        id: string;
        nom: string;
        cognom: string;
        email: string;
        password: string;
    };
    static create(id: string, nom: string, cognom: string, email: string, password: string): User;
    update(nom: string, cognom: string): User;
}
//# sourceMappingURL=user.d.ts.map