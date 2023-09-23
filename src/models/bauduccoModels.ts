export interface Produto{
    produtoId: number;
    produtoNome: string;
    produtoDescricao: string;
    produtoPreco: number;

}

const produtos: Produto[] = [];


export function addProduto(produto: Produto): Produto{
    produtos.push(produto);
    return produto;
    
}

export function getAllProduto(): Produto[]{
    return produtos;
}