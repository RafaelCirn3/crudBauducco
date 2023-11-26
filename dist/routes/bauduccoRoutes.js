"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bauduccoController_1 = require("../controllers/bauduccoController");
const router = express_1.default.Router();
router.get('/', bauduccoController_1.getAllProdutoController);
router.post('/', bauduccoController_1.addProdutoController);
router.delete('/:id', bauduccoController_1.deleteProdutoController);
router.put('/:id', bauduccoController_1.updateProdutoController);
exports.default = router;
