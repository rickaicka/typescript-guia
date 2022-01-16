"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.DB_URL = "mongodb://localhost:27017/db_portal";
    }
    createConnection() {
        mongoose_1.default.connect(this.DB_URL);
    }
}
exports.default = Database;
