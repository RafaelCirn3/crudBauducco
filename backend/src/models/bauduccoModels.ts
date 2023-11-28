import { Schema, model, Document } from "mongoose";

interface ProdutoDocument extends Document{

    produtoId: number;
    produtoNome: string;
    produtoDescricao: string;
    produtoPreco: number;
    
}

const ProdutoSchema = new Schema<Produto>({
    produtoId: {type: Number, required: true},
    produtoNome: {type: String, required: true},
    produtoDescricao: {type: String, required: true},
    produtoPreco: {type: Number, required: true},
});

export interface Produto {
    produtoId: number;
    produtoNome: string;
    produtoDescricao: string;
    produtoPreco: number;

}

const produtos: Produto[] = [];


export function addProduto(produto: Produto): Produto {
    var idSize = getAllProduto().length + 1;
    produto.produtoId = idSize;
    produtos.push(produto);
    return produto;

}

export function getAllProduto(): Produto[] {
    return produtos;
}

export function getOneProduto(id: number): Produto {
    const index = produtos.findIndex((produto) => produto.produtoId === id);
    return produtos[index];
}

export function deleteProduto(id: number): Produto | undefined {
    const index = produtos.findIndex((prod) => prod.produtoId === id);
    if (index !== -1) {
        const deleteProduto = produtos.splice(index, 1)[0]
        return deleteProduto;
    }
    return undefined;
}
export function updateProduto(id: number, produtoAtualizado: Produto): Produto | undefined {
        const index = produtos.findIndex((produto) => produto.produtoId === id);
        if (index !== -1) {
            produtos[index] = { ...produtoAtualizado, produtoId: id };
            return produtos[index];
        }
        return undefined;
    }
