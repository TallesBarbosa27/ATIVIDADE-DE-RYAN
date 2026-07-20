// funcoes.js

// Importamos o banco de dados
const bd = require('./dados');

// Variável para controlar o ID autoincremental
let proximoId = 1;

function cadastrarLivro(titulo, autor, ano) {
    const novoLivro = {
        id: proximoId++,
        titulo: titulo,
        autor: autor,
        ano: ano
    };
    
    bd.livros.push(novoLivro);
    console.log(`[SUCESSO] Livro "${titulo}" cadastrado! (ID: ${novoLivro.id})`);
    return novoLivro;
}

function listarLivros() {
    console.log("\n--- LISTA DE LIVROS CADASTRADOS ---");
    if (bd.livros.length === 0) {
        console.log("Nenhum livro cadastrado no momento.");
    } else {
        // console.table exibe o array de objetos em um formato de tabela no terminal
        console.table(bd.livros);
    }
    console.log("-----------------------------------\n");
}

function buscarLivroPorId(id) {
    const livroEncontrado = bd.livros.find(livro => livro.id === id);
    
    if (livroEncontrado) {
        console.log(`[BUSCA] Livro encontrado: ${livroEncontrado.titulo} - Autor: ${livroEncontrado.autor}`);
        return livroEncontrado;
    } else {
        console.log(`[BUSCA] Livro com ID ${id} não encontrado.`);
        return null;
    }
}

function removerLivroPorId(id) {
    // Encontra a posição (índice) do livro no array
    const index = bd.livros.findIndex(livro => livro.id === id);
    
    if (index !== -1) {
        // O método splice remove o item do array na posição indicada
        const livroRemovido = bd.livros.splice(index, 1);
        console.log(`[REMOÇÃO] Livro "${livroRemovido[0].titulo}" removido com sucesso!`);
    } else {
        console.log(`[REMOÇÃO - ERRO] Falha ao remover. Livro com ID ${id} não existe.`);
    }
}

// Exportamos as funções para serem usadas no index.js
module.exports = {
    cadastrarLivro,
    listarLivros,
    buscarLivroPorId,
    removerLivroPorId
};
