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
const PetRepository_1 = __importDefault(require("../models/repositories/PetRepository"));
const petSchemas_1 = require("../models/validators/petSchemas");
class PetController {
    constructor() {
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            const repository = new PetRepository_1.default(1);
            const pets = yield repository.findAll();
            res.json(pets);
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const repository = new PetRepository_1.default(1);
            const pet = yield repository.findById(parseInt(id));
            res.json(pet);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const pet = req.body;
            try {
                yield petSchemas_1.createPetSchema.validateAsync(pet);
            }
            catch (error) {
                res.status(400).json({ massage: error.massage });
                return;
            }
            const repository = new PetRepository_1.default(1);
            const newPet = yield repository.create(pet);
            res.json(newPet);
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pet = req.body;
            try {
                yield petSchemas_1.updatePetSchema.validateAsync(pet);
            }
            catch (error) {
                res.status(400).json({ massage: error.massage });
            }
            const repository = new PetRepository_1.default(1);
            yield repository.update(parseInt(id), pet);
            res.sendStatus(204);
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const repository = new PetRepository_1.default(1);
            yield repository.delete(parseInt(id));
            res.sendStatus(204);
        });
    }
}
exports.default = PetController;
