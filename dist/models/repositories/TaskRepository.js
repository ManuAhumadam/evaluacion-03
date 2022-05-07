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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TaskRepository {
    constructor(userId) {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const Task = yield prisma.task.findMany({
                where: {
                    userId: this.userId
                }
            });
            return Task;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const Task = yield prisma.task.findFirst({
                where: {
                    id
                }
            });
            if (!Task)
                return;
            return Task;
        });
        this.create = (Task) => __awaiter(this, void 0, void 0, function* () {
            const newTask = yield prisma.task.create({
                data: Object.assign(Object.assign({}, Task), { userId: this.userId })
            });
            return newTask;
        });
        this.update = (id, Task) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.task.updateMany({
                where: {
                    id
                },
                data: Object.assign({}, Task)
            });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.task.deleteMany({
                where: {
                    id
                }
            });
        });
        this.userId = userId;
    }
}
exports.default = TaskRepository;
