import { Dish, Availability } from "../entities/dish";
import { dishHelper } from "../helpers/dishHelper";
import { userOrderService } from "./user_orderService";
export declare class dishService {
    private readonly helper;
    private readonly userOrderService;
    constructor(helper: dishHelper, userOrderService: userOrderService);
    findDishById(id: string): Promise<Dish>;
    findDishes(): Promise<Dish[]>;
    getDishReservationCount(dishId: string): Promise<number>;
    createDish(truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string): Promise<Dish>;
    updateDish(id: string, description?: string, availability?: Availability, priceValue?: number, priceCurrency?: string): Promise<{
        updated: Dish;
        alternatives: Dish[];
    }>;
    deleteDish(id: string): Promise<void>;
}
//# sourceMappingURL=dishService.d.ts.map