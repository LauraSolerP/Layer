"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    nom;
    cognom;
    email;
    password;
    constructor(id, nom, cognom, email, password) {
        this.id = id;
        this.nom = nom;
        this.cognom = cognom;
        this.email = email;
        this.password = password;
    }
    getPrimitive() {
        return {
            id: this.id,
            nom: this.nom,
            cognom: this.cognom,
            email: this.email,
            password: this.password
        };
    }
    static create(id, nom, cognom, email, password) {
        return new User(id, nom, cognom, email, password);
    }
    update(nom, cognom) {
        return new User(this.id, nom, cognom, this.email, this.password);
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map