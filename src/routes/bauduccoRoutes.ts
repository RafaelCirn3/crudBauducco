import express from "express";
import { addProdutoController, getAllProdutoController } from "../controllers/bauduccoController";

const router = express.Router();

router.get('/', getAllProdutoController);
router.post('/', addProdutoController);

export default router;

