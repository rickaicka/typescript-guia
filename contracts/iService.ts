import {Result} from "../infra/result";
import {News} from "../models/news";

export interface IService<T>{
    get(id: string): Promise<T | null>;
    getAll(page: number, qtd: number): Promise<Result<T>>;
}