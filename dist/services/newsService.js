"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const result_1 = require("../infra/result");
const newsRepository_1 = require("../repository/newsRepository");
class NewsService {
    get(_id) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield newsRepository_1.NewsRepository.findById(_id);
            return result;
        });
    }
    getAll(page, qtd) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = new result_1.Result();
            result.Page = page;
            result.Qtd = qtd;
            result.Total = yield newsRepository_1.NewsRepository.count({});
            result.Data = yield newsRepository_1.NewsRepository.find({}).skip((page * qtd) - qtd).limit(qtd);
            return result;
        });
    }
}
exports.NewsService = NewsService;
