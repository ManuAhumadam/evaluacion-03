"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskController_1 = __importDefault(require("../controllers/TaskController"));
const TaskRouter = (0, express_1.Router)();
const controller = new TaskController_1.default();
TaskRouter.get('/', controller.getAll);
TaskRouter.get('/:id', controller.getById);
TaskRouter.post('/', controller.create);
TaskRouter.put('/:id', controller.update);
TaskRouter.delete('/:id', controller.delete);
exports.default = TaskRouter;
