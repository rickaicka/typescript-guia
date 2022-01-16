"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GaleriaRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const GaleriaSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    texto: { type: String },
    dataPublicacao: { type: Date },
    fotos: { type: Array() },
    ativo: { type: Boolean }
});
exports.GaleriaRepository = mongoose_1.default.model("galeria", GaleriaSchema);
