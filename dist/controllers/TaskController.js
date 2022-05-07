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
const TaskRepository_1 = __importDefault(require("../models/repositories/TaskRepository"));
const TaskSchemas_1 = require("../models/validators/TaskSchemas");
class TaskController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            const Task = yield repository.findAll();
            res.json(Task);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = req.user;
            const { id } = req.params;
            const repository = new TaskRepository_1.default(user.sub);
            const Task = yield repository.findById(parseInt(id));
            res.json(Task);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const Task = req.body;
            try {
                yield TaskSchemas_1.createTaskSchema.validateAsync(Task);
            }
            catch (error) {
                res.status(400).json({ massage: error.massage });
                return;
            }
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            const newTask = yield repository.create(Task);
            res.json(newTask);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const Task = req.body;
            try {
                yield TaskSchemas_1.updateTaskSchema.validateAsync(Task);
            }
            catch (error) {
                res.status(400).json({ massage: error.massage });
            }
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            yield repository.update(parseInt(id), Task);
            res.sendStatus(204);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            yield repository.delete(parseInt(id));
            res.sendStatus(204);
        });
    }
}
exports.default = TaskController;
