"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepositoryInMemory = void 0;
class UserRepositoryInMemory {
    users = [];
    async create(user) {
        this.users.push(user);
    }
}
exports.UserRepositoryInMemory = UserRepositoryInMemory;
//# sourceMappingURL=UserRepositoryInMemory.js.map