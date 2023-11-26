"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProduto = exports.deleteProduto = exports.getAllProduto = exports.addProduto = void 0;
const mongoose_1 = require("mongoose");
const ProdutoSchema = new mongoose_1.Schema({
    produtoNome: { type: String, required: true },
    produtoDescricao: { type: String, required: true },
    produtoPreco: { type: Number, required: true },
});
const produtos = [];
function addProduto(produto) {
    produtos.push(produto);
    return produto;
}
exports.addProduto = addProduto;
function getAllProduto() {
    return produtos;
}
exports.getAllProduto = getAllProduto;
function deleteProduto(id) {
    const index = produtos.findIndex((prod) => prod.produtoId === id);
    if (index !== -1) {
        const deleteProduto = produtos.splice(index, 1)[0];
        return deleteProduto;
    }
    return undefined;
}
exports.deleteProduto = deleteProduto;
function updateProduto(id, produtoAtualizado) {
    const index = produtos.findIndex((produto) => produto.produtoId === id);
    if (index !== -1) {
        produtos[index] = { ...produtoAtualizado, produtoId: id };
        return produtos[index];
    }
    return undefined;
}
exports.updateProduto = updateProduto;
