"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideosRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const VideosSchema = new mongoose_1.default.Schema({
    titulo: { type: String },
    texto: { type: String },
    imagem: { type: String },
    duracao: { type: String },
    link: { type: String },
    url: { type: String },
    dataPublicacao: { type: Date },
    tags: { type: String },
    ativo: { type: Boolean }
});
exports.VideosRepository = mongoose_1.default.model("videos", VideosSchema);
