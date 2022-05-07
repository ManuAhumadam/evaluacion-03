"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tokenValidator_1 = __importDefault(require("../middlewares/tokenValidator"));
const authRoutes_1 = __importDefault(require("./authRoutes"));
const healthRoutes_1 = __importDefault(require("./healthRoutes"));
const petRoutes_1 = __importDefault(require("./petRoutes"));
//Tarea
const TaskRoutes_1 = __importDefault(require("./TaskRoutes"));
const apiRoutes = (0, express_1.Router)();
apiRoutes.use('/', healthRoutes_1.default);
apiRoutes.use('/pets', petRoutes_1.default);
apiRoutes.use('/auth', authRoutes_1.default);
//Tarea
apiRoutes.use('/Task', (0, tokenValidator_1.default)(), TaskRoutes_1.default);
exports.default = apiRoutes;
