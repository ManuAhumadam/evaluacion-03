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
const jwt_1 = require("../lib/jwt");
function tokenValidator() {
    return function (req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                res.status(401).json({ message: "Missing authorization header" });
                return;
            }
            const [, token] = authHeader.split(' ');
            try {
                const decoded = (0, jwt_1.verifyToken)(token);
                req.user = decoded;
            }
            catch (err) {
                res.status(401).json({ message: "Missing authorization header" });
                return;
            }
            return next();
        });
    };
}
exports.default = tokenValidator;
