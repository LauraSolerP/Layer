import { Router } from "express"
import { getHealthRoute } from "./health"
import { getMeRoute } from "./getMe"

import { postUserLoginRoute } from "./User/postLogin"
import { deleteUserRoute } from "./User/deleteUser"
import { patchUserRoute } from "./User/patchUser"
import { getUserRoute } from "./User/getUser"
import { patchUserPasswordRoute } from "./User/patchUserPassword"
import { patchUserTypeRoute } from "./User/patchUserType"
import { postUserRoute } from "./User/postUser"
import { putUserRoute } from "./User/putUser"

import { postDishRoute } from "./Dish/postDish"
import { deleteDishRoute } from "./Dish/deleteDish"
import { patchDishRoute } from "./Dish/patchDish"
import { patchDishPriceRoute } from "./Dish/patchDishPrice"
import { patchDishAvailabilityRoute } from "./Dish/patchDishAvailability"
import { getDishRoute } from "./Dish/getDish"
import { getDishReservationCountRoute } from "./Dish/getDishReservationCount"
import { getDishesRoute } from "./Dish/getDishes"
import { putDishRoute } from "./Dish/putDish"

import { deleteEventRoute } from "./Event/deleteEvent"
import { getEventRoute } from "./Event/getEvent"
import { getEventsRoute } from "./Event/getEvents"
import { postEventRoute } from "./Event/postEvent"
import { putEventRoute } from "./Event/putEvent"
import { patchEventRoute } from "./Event/patchEvent"
import { patchEventDateRoute } from "./Event/patchEventDate"

import { getMenuRoute } from "./Menu/getMenu"
import { getMenusRoute } from "./Menu/getMenus"
import { postMenuRoute } from "./Menu/postMenu"
import { putMenuRoute } from "./Menu/putMenu"
import { deleteMenuRoute } from "./Menu/deleteMenu"
import { patchMenuRoute } from "./Menu/patchMenu"
import { patchMenuPriceRoute } from "./Menu/patchMenuPrice"
import { patchMenuSeasonRoute } from "./Menu/patchMenuSeason"

import { postOrderRoute } from "./Order/postOrder"
import { deleteOrderRoute } from "./Order/deleteOrder"
import { patchOrderDeliveryRoute } from "./Order/patchOrderDelivery"
import { patchOrderPriceRoute } from "./Order/patchOrderPrice"
import { patchOrderRequestsRoute } from "./Order/patchOrderRequests"
import { patchOrderStateRoute } from "./Order/patchOrderState"
import { getOrdersRoute } from "./Order/getOrders"
import { getOrderRoute } from "./Order/getOrder"
import { putOrderRoute } from "./Order/putOrder"

import { deleteReviewRoute } from "./Review/deleteReview"
import { getReviewRoute } from "./Review/getReview"
import { getReviewsRoute } from "./Review/getReviews"
import { postReviewRoute } from "./Review/postReview"
import { putReviewRoute } from "./Review/putReview"

import { deleteTruckRoute } from "./Truck/deleteTruck"
import { getTruckRoute } from "./Truck/getTruck"
import { getTrucksRoute } from "./Truck/getTrucks"
import { postTruckRoute } from "./Truck/postTruck"
import { putTruckRoute } from "./Truck/putTruck"
import { patchTruckNameRoute } from "./Truck/patchTruckName"
import { patchTruckOwnerRoute } from "./Truck/patchTruckOwner"
import { patchTruckInscriptionRoute } from "./Truck/patchTruckInscription"

export function registerRoutes(): Router {
    const router = Router()

    getHealthRoute(router)
    getMeRoute(router)

    postUserLoginRoute(router)
    deleteUserRoute(router)
    patchUserRoute(router)
    getUserRoute(router)
    patchUserPasswordRoute(router)
    patchUserTypeRoute(router)
    postUserRoute(router)
    putUserRoute(router)

    postDishRoute(router)
    deleteDishRoute(router)
    patchDishRoute(router)
    patchDishPriceRoute(router)
    patchDishAvailabilityRoute(router)
    getDishRoute(router)
    getDishReservationCountRoute(router)
    getDishesRoute(router)
    putDishRoute(router)

    deleteEventRoute(router)
    getEventRoute(router)
    getEventsRoute(router)
    postEventRoute(router)
    putEventRoute(router)
    patchEventRoute(router)
    patchEventDateRoute(router)

    getMenuRoute(router)
    getMenusRoute(router)
    postMenuRoute(router)
    putMenuRoute(router)
    deleteMenuRoute(router)
    patchMenuRoute(router)
    patchMenuPriceRoute(router)
    patchMenuSeasonRoute(router)

    postOrderRoute(router)
    deleteOrderRoute(router)
    patchOrderDeliveryRoute(router)
    patchOrderPriceRoute(router)
    patchOrderRequestsRoute(router)
    patchOrderStateRoute(router)
    getOrdersRoute(router)
    getOrderRoute(router)
    putOrderRoute(router)

    deleteReviewRoute(router)
    getReviewRoute(router)
    getReviewsRoute(router)
    postReviewRoute(router)
    putReviewRoute(router)

    deleteTruckRoute(router)
    getTruckRoute(router)
    getTrucksRoute(router)
    postTruckRoute(router)
    putTruckRoute(router)
    patchTruckNameRoute(router)
    patchTruckOwnerRoute(router)
    patchTruckInscriptionRoute(router)

    return router
}