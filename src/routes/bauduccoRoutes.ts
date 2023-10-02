import express from "express";
import { addProdutoController, deleteProdutoController,updateProdutoController, getAllProdutoController} 

from "../controllers/bauduccoController";

const router = express.Router();

router.get('/', getAllProdutoController);
router.post('/', addProdutoController);
router.delete('/:id', deleteProdutoController);
router.put('/:id',updateProdutoController);


export default router;

