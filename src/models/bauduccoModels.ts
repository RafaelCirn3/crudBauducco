export interface Produto {
    produtoId: number;
    produtoNome: string;
    produtoDescricao: string;
    produtoPreco: number;

}

const produtos: Produto[] = [];


export function addProduto(produto: Produto): Produto {
    produtos.push(produto);
    return produto;

}

export function getAllProduto(): Produto[] {
    return produtos;
}

export function deleteProduto(id: number): Produto | undefined {
    const index = produtos.findIndex((prod) => prod.produtoId === id);
    if (index !== -1) {
        const deleteProduto = produtos.splice(index, 1)[0]
        return deleteProduto;
    }
    
}
export function updateProduto(id: number, produtoAtualizado: Produto): Produto | undefined {
        const index = produtos.findIndex((produto) => produto.produtoId === id);
        if (index !== -1) {
            produtos[index] = { ...produtoAtualizado, produtoId: id };
            return produtos[index];
        }
        return undefined;
    }
