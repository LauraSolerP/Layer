import { Entity } from "./entity";
export declare enum UserType {
    CLIENT = "CLIENT",
    OWNER = "OWNER",
    ADMIN = "ADMIN"
}
export declare class User implements Entity {
    readonly id: string;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly password: string;
    readonly type: UserType;
    constructor(id: string, name: string, surname: string, email: string, password: string, type: UserType);
    getPrimitive(): {
        id: string;
        name: string;
        surname: string;
        email: string;
        password: string;
        type: UserType;
    };
    static create(name: string, surname: string, email: string, password: string, type?: UserType): User;
    update(data: {
        name?: string | undefined;
        surname?: string | undefined;
        email?: string | undefined;
        password?: string | undefined;
        type?: UserType | undefined;
    }): User;
}
//# sourceMappingURL=user.d.ts.map