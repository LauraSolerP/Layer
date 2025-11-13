import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { User } from "../entities/user";
export declare class userHelper extends Helper<User> {
    getEntitySchema(): EntitySchema<User>;
    findUserById(id: string): Promise<User | null>;
}
//# sourceMappingURL=userHelper.d.ts.map