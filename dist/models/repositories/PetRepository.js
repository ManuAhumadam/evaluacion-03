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
class PetRepository {
    constructor(userId) {
        this.findAll = () => __awaiter(this, void 0, void 0, function* () {
            const pets = yield prisma.pet.findMany({
                where: {
                    userId: this.userId
                }
            });
            return pets;
        });
        this.findById = (id) => __awaiter(this, void 0, void 0, function* () {
            const pet = yield prisma.pet.findFirst({
                where: {
                    id
                }
            });
            if (!pet)
                return;
            return pet;
        });
        this.create = (pet) => __awaiter(this, void 0, void 0, function* () {
            const newPet = yield prisma.pet.create({
                data: Object.assign(Object.assign({}, pet), { birth: new Date(pet.birth).toISOString(), userId: this.userId })
            });
            return newPet;
        });
        this.update = (id, pet) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.pet.update({
                where: {
                    id
                },
                data: Object.assign(Object.assign({}, pet), { birth: pet.birth ? new Date(pet.birth).toISOString() : undefined })
            });
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma.pet.delete({
                where: {
                    id
                }
            });
        });
        this.userId = userId;
    }
}
exports.default = PetRepository;
