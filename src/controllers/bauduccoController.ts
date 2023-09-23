import { Request, Response } from "express"; // espaço antes de Request por Identação
import { Produto, getAllProduto, addProduto } from "../models/bauduccoModels";

export function addProdutoController(request: Request, response: Response): void{
    const novoProduto: Produto = request.body;
    const Produto = addProduto(novoProduto);
    response.status(201).json(Produto);
}

export function getAllProdutoController(req: Request, res: Response){
    const Produtos = getAllProduto();
    res.json(Produtos);
}
