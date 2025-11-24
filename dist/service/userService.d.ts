import { User, UserType } from "../entities/user";
import { userHelper } from "../helpers/userHelper";
export declare class userService {
    private readonly helper;
    constructor(helper: userHelper);
    findUserById(id: string): Promise<User>;
    findUserByEmail(email: string, password: string): Promise<User>;
    createUser(name: string, surname: string, email: string, password: string, type: UserType): Promise<User>;
    updateUser(id: string, name?: string, surname?: string, email?: string, password?: string, type?: UserType): Promise<User>;
    deleteUser(id: string): Promise<void>;
}
//# sourceMappingURL=userService.d.ts.map