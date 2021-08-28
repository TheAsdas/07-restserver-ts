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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uri = process.env.MONGO;
        if (uri)
            yield mongoose_1.default.connect(uri, {});
        console.log("Conexión exitosa con la base de datos.");
    }
    catch (error) {
        console.log(error);
        throw new Error("No pudimos conectarnos con la base de datos.");
    }
});
exports.connectToDb = connectToDb;
//# sourceMappingURL=config.js.map