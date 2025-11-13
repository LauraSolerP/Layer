import { User } from "../entities/user";
import { userHelper } from "../helpers/userHelper";
export declare class userService {
    private readonly helper;
    constructor(helper: userHelper);
    findUserById(id: string): Promise<User>;
}
//# sourceMappingURL=userService.d.ts.map