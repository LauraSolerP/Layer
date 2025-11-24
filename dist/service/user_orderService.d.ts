import { UserOrder } from "../entities/user_order";
import { userOrderHelper } from "../helpers/user_orderHelper";
export declare class userOrderService {
    private readonly helper;
    constructor(helper: userOrderHelper);
    findUserOrderById(id: string): Promise<UserOrder>;
    findUserOrders(): Promise<UserOrder[]>;
    findUserOrdersByDishId(dishId: string): Promise<UserOrder[]>;
    createUserOrder(userId: string, orderId: string, dishId: string): Promise<UserOrder>;
    updateUserOrder(id: string, userId?: string, orderId?: string, dishId?: string): Promise<UserOrder>;
    deleteUserOrder(id: string): Promise<void>;
}
//# sourceMappingURL=user_orderService.d.ts.map