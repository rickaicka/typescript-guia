"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./infra/db"));
const tsyringe_1 = require("tsyringe");
require("./shared/container");
const newsController_1 = require("./controller/newsController");
const videosController_1 = require("./controller/videosController");
const galeriaController_1 = require("./controller/galeriaController");
class StartUp {
    constructor() {
        this._db = new db_1.default();
        this.news = tsyringe_1.container.resolve(newsController_1.NewsController);
        this.videos = tsyringe_1.container.resolve(videosController_1.VideosController);
        this.galeria = tsyringe_1.container.resolve(galeriaController_1.GaleriaController);
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send({ versao: "0.0.1" });
        });
        this.app.route("/api/v1/news/:page/:qtd").get((req, res) => {
            return this.news.get(req, res);
        });
        this.app.route("/api/v1/news/:id").get((req, res) => {
            return this.news.getById(req, res);
        });
        this.app.route("/api/v1/videos/:page/:qtd").get((req, res) => {
            return this.videos.get(req, res);
        });
        this.app.route("/api/v1/videos/:id").get((req, res) => {
            return this.videos.getById(req, res);
        });
        this.app.route("/api/v1/galeria/:page/:qtd").get((req, res) => {
            return this.galeria.get(req, res);
        });
        this.app.route("/api/v1/galeria/:id").get((req, res) => {
            return this.galeria.getById(req, res);
        });
    }
}
exports.default = new StartUp();
