import mongoose from "mongoose";
import {Galeria} from "../models/galeria";
import {Fotos} from "../models/fotos";

const GaleriaSchema = new mongoose.Schema<Galeria>({
    titulo: {type: String},
    texto: {type: String},
    dataPublicacao: {type: Date},
    fotos: {type: Array<Fotos>()},
    ativo: {type: Boolean}
});

export const GaleriaRepository = mongoose.model<Galeria>("galeria", GaleriaSchema);