"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePetSchema = exports.createPetSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createPetSchema = joi_1.default.object().keys({
    name: joi_1.default.string().required(),
    type: joi_1.default.string().required(),
    birth: joi_1.default.date().required(),
    photo: joi_1.default.string().uri()
});
exports.updatePetSchema = joi_1.default.object().keys({
    name: joi_1.default.string(),
    type: joi_1.default.string(),
    birth: joi_1.default.date(),
    photo: joi_1.default.string().uri()
});
