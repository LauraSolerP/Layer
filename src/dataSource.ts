import "dotenv/config"
import { DataSource } from "typeorm"
import { DishMenuModel } from "./model/dish_menu.model"
import { DishModel } from "./model/dish.model"
import { EventModel } from "./model/event.model"
import { InscriptionModel } from "./model/inscription.model"
import { MenuModel } from "./model/menu.model"
import { OrderModel } from "./model/order.model"
import { ReviewModel } from "./model/review.model"
import { TruckModel } from "./model/truck.model"
import { UserModel } from "./model/user.model"
import { UserOrderModel } from "./model/user_order.model"

export default new DataSource({
    type: "postgres",
    host: process.env.DB_HOST as string,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
    entities: [UserModel, TruckModel, MenuModel, DishMenuModel, DishModel, OrderModel, ReviewModel, InscriptionModel, EventModel, UserOrderModel],
    migrations: ["persistence/*.js"]
})