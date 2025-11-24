import { Helper } from "./helper";
import { EntitySchema } from "typeorm";
import { UserOrder } from "../entities/user_order";
export declare class userOrderHelper extends Helper<UserOrder> {
    getEntitySchema(): EntitySchema<UserOrder>;
    findUserOrderById(id: string): Promise<UserOrder | null>;
    findUserOrders(): Promise<UserOrder[]>;
    findUserOrdersByDishId(dishId: string): Promise<UserOrder[]>;
    saveUserOrder(userOrder: UserOrder): Promise<UserOrder>;
    deleteUserOrder(id: string): Promise<void>;
}
//# sourceMappingURL=user_orderHelper.d.ts.map