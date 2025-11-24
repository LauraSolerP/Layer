import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { User } from "../entities/user";
export declare class userHelper extends Helper<User> {
    getEntitySchema(): EntitySchema<User>;
    findUserById(id: string): Promise<User | null>;
    findUserByEmail(email: string): Promise<User | null>;
    saveUser(user: User): Promise<User>;
    deleteUser(id: string): Promise<void>;
}
//# sourceMappingURL=userHelper.d.ts.map