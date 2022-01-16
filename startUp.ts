import "reflect-metadata";
import express, { Application, Request,	Response } from	"express";
import database from "./infra/db";

import {container} from "tsyringe";
import "./shared/container"
import {NewsController} from "./controller/newsController";
import {VideosController} from "./controller/videosController";
import {GaleriaController} from "./controller/galeriaController";

class StartUp {
    public app: Application;
    private _db: database = new database();

    constructor(){
        this.app = express();
        this._db.createConnection();
        this.routes()
    }

    private	news =	container.resolve(NewsController);
    private	videos = container.resolve(VideosController);
    private	galeria	= container.resolve(GaleriaController);

    routes() {
        this.app.route("/").get((req: Request,res: Response) => {
            res.send({versao: "0.0.1"})
        });
        
        this.app.route("/api/v1/news/:page/:qtd").get((req: Request,res: Response) =>{
           return this.news.get(req, res);
        });

        this.app.route("/api/v1/news/:id").get((req: Request,res: Response) => {
            return this.news.getById(req, res);
        });

        this.app.route("/api/v1/videos/:page/:qtd").get((req:	Request, res: Response)	=>	{
            return this.videos.get(req, res);
        });

        this.app.route("/api/v1/videos/:id").get((req: Request, res: Response) =>	{
            return this.videos.getById(req, res);
        });

        this.app.route("/api/v1/galeria/:page/:qtd").get((req:	Request, res: Response)	=>	{
            return this.galeria.get(req, res);
        });

        this.app.route("/api/v1/galeria/:id").get((req: Request, res: Response) =>	{
            return this.galeria.getById(req, res);
        });

    }
}

export default new StartUp();
