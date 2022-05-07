"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PetController_1 = __importDefault(require("../controllers/PetController"));
const petRouter = (0, express_1.Router)();
const controller = new PetController_1.default();
petRouter.get('/', controller.getAll);
petRouter.get('/:id', controller.getById);
petRouter.post('/', controller.create);
petRouter.put('/:id', controller.update);
petRouter.delete('/:id', controller.delete);
exports.default = petRouter;
