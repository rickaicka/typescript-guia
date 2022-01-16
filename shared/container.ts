import "reflect-metadata";
import {container} from "tsyringe";
import {NewsService} from "../services/newsService";
import {VideosService} from "../services/videosService";
import {GaleriaService} from "../services/galeriaService";

container.register(
    "INewsService", {
        useClass:	NewsService
    },
);
container.register(
    "IVideosService", {
        useClass:	VideosService
    },
);
container.register(
    "IGaleriaService", {
        useClass:	GaleriaService
    },
);
