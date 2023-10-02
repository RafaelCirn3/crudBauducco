import express from "express";
import { addProdutoController, deleteProdutoController,updateProdutoController, getAllProdutoController, listarSaboresDeBiscoitos} 

from "../controllers/bauduccoController";

const router = express.Router();

router.get('/', getAllProdutoController);
router.post('/', addProdutoController);
router.get('/', listarSaboresDeBiscoitos);
router.delete('/:id', deleteProdutoController);
router.put('/:id',updateProdutoController);


export default router;

