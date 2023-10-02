import { Request, Response } from "express"; // espaço antes de Request por Identação
import { Produto, getAllProduto, addProduto, deleteProduto, updateProduto } from "../models/bauduccoModels";

export function addProdutoController(request: Request, response: Response): void{
    const novoProduto: Produto = request.body;
    const Produto = addProduto(novoProduto);
    response.status(201).json(Produto);
}

export function getAllProdutoController(req: Request, res: Response){
    const Produtos = getAllProduto();
    res.json(Produtos);
}

export function updateProdutoController(req:Request,res:Response): void{
    const {id } = req.params;
    const produtoId = parseInt(id,10);
    const produtoAtualizado: Produto = req.body;
    const atualizado = updateProduto(produtoId,produtoAtualizado);

    if (atualizado){
         res.json(atualizado);
    }else{
        res.status(404).json({mensagem : 'Produto não encontrado'})
    }
}

export function deleteProdutoController(req: Request, res: Response): void{
    const { id } = req.params;
    const produtoId = parseInt(id, 10);

    const deleted = deleteProduto(produtoId);
    if (deleted)  {
        res.json(deleted);
    } else {
        res.status(404).json({message: 'Produto not found'})
    }

}
