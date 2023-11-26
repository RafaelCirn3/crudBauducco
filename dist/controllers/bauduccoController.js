"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProdutoController = exports.updateProdutoController = exports.getAllProdutoController = exports.addProdutoController = void 0;
const bauduccoModels_1 = require("../models/bauduccoModels");
function addProdutoController(request, response) {
    const novoProduto = request.body;
    const Produto = (0, bauduccoModels_1.addProduto)(novoProduto);
    response.status(201).json(Produto);
}
exports.addProdutoController = addProdutoController;
function getAllProdutoController(req, res) {
    const Produtos = (0, bauduccoModels_1.getAllProduto)();
    res.json(Produtos);
}
exports.getAllProdutoController = getAllProdutoController;
function updateProdutoController(req, res) {
    const { id } = req.params;
    const produtoId = parseInt(id, 10);
    const produtoAtualizado = req.body;
    const atualizado = (0, bauduccoModels_1.updateProduto)(produtoId, produtoAtualizado);
    if (atualizado) {
        res.json(atualizado);
    }
    else {
        res.status(404).json({ mensagem: 'Produto não encontrado' });
    }
}
exports.updateProdutoController = updateProdutoController;
function deleteProdutoController(req, res) {
    const { id } = req.params;
    const produtoId = parseInt(id, 10);
    const deleted = (0, bauduccoModels_1.deleteProduto)(produtoId);
    if (deleted) {
        res.json(deleted);
    }
    else {
        res.status(404).json({ message: 'Produto não encontrado' });
    }
}
exports.deleteProdutoController = deleteProdutoController;
