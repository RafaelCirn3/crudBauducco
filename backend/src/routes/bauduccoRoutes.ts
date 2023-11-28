import express from "express";
import { addProdutoController, getOneProdutoController, deleteProdutoController,updateProdutoController, getAllProdutoController} 

from "../controllers/bauduccoController";

const router = express.Router();

router.get('/', getAllProdutoController);
router.get('/:id', getOneProdutoController);
router.post('/', addProdutoController);
router.delete('/:id', deleteProdutoController);
router.put('/:id',updateProdutoController);


export default router;

