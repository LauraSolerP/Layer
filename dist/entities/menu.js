"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.Season = void 0;
const uuid_1 = require("uuid");
var Season;
(function (Season) {
    Season["SPRING"] = "SPRING";
    Season["SUMMER"] = "SUMMER";
    Season["FALL"] = "FALL";
    Season["WINTER"] = "WINTER";
})(Season || (exports.Season = Season = {}));
class Menu {
    id;
    truckId;
    description;
    season;
    priceValue;
    priceCurrency;
    constructor(id, truckId, description, season, priceValue, priceCurrency) {
        this.id = id;
        this.truckId = truckId;
        this.description = description;
        this.season = season;
        this.priceValue = priceValue;
        this.priceCurrency = priceCurrency;
    }
    getPrimitive() {
        return {
            id: this.id,
            truckId: this.truckId,
            description: this.description,
            season: this.season,
            priceValue: this.priceValue,
            priceCurrency: this.priceCurrency
        };
    }
    static create(truckId, description, season, priceValue) {
        return new Menu((0, uuid_1.v4)(), truckId, description, season, priceValue, "EUR");
    }
    update(data) {
        return new Menu(this.id, this.truckId, data.description ?? this.description, data.season ?? this.season, data.priceValue ?? this.priceValue, data.priceCurrency ?? this.priceCurrency);
    }
}
exports.Menu = Menu;
//# sourceMappingURL=menu.js.map