"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
//  app.get('/', (_req, res) => {
//      res.send('Hellow Manu')
//  })
app.use('/api/v1', routes_1.default);
app.use((_req, res) => {
    res.status(404).json({
        message: 'Not Found'
    });
});
exports.default = app;
