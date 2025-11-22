import { Dish, Availability } from "../entities/dish";
import { DishNotFound } from "../errors/dish/dishNotFound";
import { dishHelper } from "../helpers/dishHelper";


export class dishService {

    constructor(private readonly helper: dishHelper) { }

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

    async createDish(truckId: string, description: string, availability: Availability, priceValue: number, priceCurrency: string): Promise<Dish> {


        const dish = Dish.create(truckId, description, availability, priceValue, priceCurrency)

        return this.helper.saveDish(dish)
    }

    async updateDish(id: string, description?: string, availability?: Availability, priceValue?: number, priceCurrency?: string): Promise<Dish> {
        const existing = await this.findDishById(id)

        const updatedDish = existing.update({ description, availability, priceValue, priceCurrency })

        return this.helper.saveDish(updatedDish)
    }

    async deleteDish(id: string): Promise<void> {
        await this.findDishById(id)
        await this.helper.deleteDish(id)
    }

}