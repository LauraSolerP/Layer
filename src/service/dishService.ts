import { Dish, Availability } from "../entities/dish";
import { DishNotFound } from "../errors/dish/dishNotFound";
import { dishHelper } from "../helpers/dishHelper";
import { userOrderService } from "./user_orderService";


export class dishService {

    constructor(private readonly helper: dishHelper, private readonly userOrderService: userOrderService) { }

    async findDishById(id: string): Promise<Dish> {

        const dish = await this.helper.findDishById(id)

        if (!dish) {
            throw new DishNotFound(id)
        }

        return dish

    }

    async findDishes(): Promise<Dish[]> {
        return this.helper.findDishes()
    }

    async getDishReservationCount(dishId: string): Promise<number> {
        const orders = await this.userOrderService.findUserOrdersByDishId(dishId)
        return orders.length
    }


    async createDish(truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string): Promise<Dish> {


        const dish = Dish.create(truckId, description, availability, priceValue, priceCurrency)

        return this.helper.saveDish(dish)
    }

    async updateDish(id: string, description?: string, availability?: Availability, priceValue?: number, priceCurrency?: string): Promise<{ updated: Dish, alternatives: Dish[] }> {
        const existing = await this.findDishById(id)

        const updatedDish = existing.update({ description, availability, priceValue, priceCurrency })

        const saved = await this.helper.saveDish(updatedDish)

        if (availability === Availability.OUTOFSTOCK) {

            const all = await this.findDishes()

            const alternatives = all.filter(d =>
                d.id !== saved.id &&
                d.truckId === saved.truckId &&
                d.availability === Availability.AVAILABLE
            )

            return { updated: saved, alternatives }
        }

        return { updated: saved, alternatives: [] }
    }

    async deleteDish(id: string): Promise<void> {
        await this.findDishById(id)
        await this.helper.deleteDish(id)
    }

}