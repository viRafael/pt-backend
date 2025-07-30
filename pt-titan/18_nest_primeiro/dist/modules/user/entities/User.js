"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const crypto_1 = require("crypto");
class User {
    propriedade;
    _id;
    constructor(propriedade, id) {
        this.propriedade = {
            ...propriedade,
            createdAt: propriedade.createdAt || new Date()
        };
        this._id = id || (0, crypto_1.randomUUID)();
    }
    get id() {
        return this._id;
    }
    get email() {
        return this.propriedade.email;
    }
    set email(email) {
        this.propriedade.email = email;
    }
    get password() {
        return this.propriedade.password;
    }
    set password(password) {
        this.propriedade.password = password;
    }
    get name() {
        return this.propriedade.name;
    }
    set name(name) {
        this.propriedade.name = name;
    }
    get createdAt() {
        return this.createdAt;
    }
    set createdAt(createdAt) {
        this.createdAt = createdAt;
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map