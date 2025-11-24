"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dish = exports.Availability = void 0;
const uuid_1 = require("uuid");
var Availability;
(function (Availability) {
    Availability["AVAILABLE"] = "AVAILABLE";
    Availability["OUTOFSTOCK"] = "OUTOFSTOCK";
    Availability["UNAVAILABLE"] = "UNAVAILABLE";
})(Availability || (exports.Availability = Availability = {}));
class Dish {
    id;
    truckId;
    description;
    availability;
    priceValue;
    priceCurrency;
    constructor(id, truckId, description, availability, priceValue, priceCurrency) {
        this.id = id;
        this.truckId = truckId;
        this.description = description;
        this.availability = availability;
        this.priceValue = priceValue;
        this.priceCurrency = priceCurrency;
    }
    getPrimitive() {
        return {
            id: this.id,
            truckId: this.truckId,
            description: this.description,
            availability: this.availability,
            priceValue: this.priceValue,
            priceCurrency: this.priceCurrency
        };
    }
    static create(truckId, description, availability, priceValue, priceCurrency) {
        return new Dish((0, uuid_1.v4)(), truckId, description, availability, priceValue, priceCurrency);
    }
    update(data) {
        return new Dish(this.id, this.truckId, data.description ?? this.description, data.availability ?? this.availability, data.priceValue ?? this.priceValue, data.priceCurrency ?? this.priceCurrency);
    }
}
exports.Dish = Dish;
//# sourceMappingURL=dish.js.map