// index.js

// Importamos as funções
const sistema = require('./funcoes');

console.log("Iniciando o Sistema de Gerenciamento de Livros...\n");

// 1. Testando o Cadastro de livros
sistema.cadastrarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
sistema.cadastrarLivro("1984", "George Orwell", 1949);
sistema.cadastrarLivro("Dom Quixote", "Miguel de Cervantes", 1605);

// 2. Testando a Listagem
sistema.listarLivros();

// 3. Testando a Busca por ID
sistema.buscarLivroPorId(2); // Deve encontrar "1984"
sistema.buscarLivroPorId(99); // Deve dar mensagem de não encontrado
console.log("");

// 4. Testando a Remoção por ID
sistema.removerLivroPorId(1); // Vai remover "O Senhor dos Anéis"
console.log("");

// 5. Listagem final para comprovar a remoção
sistema.listarLivros();
