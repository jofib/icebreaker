/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Função para carregar e processar as frases do arquivo de texto
function carregarFrasesDoArquivo(url, callback) {
const request = new XMLHttpRequest();
        request.open('GET', url, true);
        request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
        const linhas = request.responseText.split('\n');
                let categoriaAtual = '';
                const frasesPorCategoria = {};
                linhas.forEach(function(linha) {
                if (linha.trim() !== '') {
                if (linha.trim().toLowerCase() === linha.trim()) {
                categoriaAtual = linha.trim();
                        frasesPorCategoria[categoriaAtual] = [];
                } else {
                frasesPorCategoria[categoriaAtual].push(linha.trim());
                }
                }
                });
                callback(frasesPorCategoria);
        }
        };
        request.send();
}

// Função para gerar uma frase aleatória de uma categoria específica
function gerarFrasePorCategoria(categoria, frasesPorCategoria) {
if (categoria in frasesPorCategoria) {
const frasesDaCategoria = frasesPorCategoria[categoria];
        const indice = Math.floor(Math.random() * frasesDaCategoria.length);
        return frasesDaCategoria[indice];
        } else if (categoria === 'all') {
const categorias = Object.keys(frasesPorCategoria);
        const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
        const frasesAleatorias = frasesPorCategoria[categoriaAleatoria];
        const indice = Math.floor(Math.random() * frasesAleatorias.length);
        return frasesAleatorias[indice];
        } else {
return "Categoria não encontrada.";
        }
}

// Função para atualizar o texto da frase
function atualizarFrase() {
const categoriaSelecionada = document.getElementById('categorySelect').value;
        const fraseElement = document.getElementById('randomPhrase');
        // Gerar as frases aleatórias ao carregar a página e exibir a selecionada
        carregarFrasesDoArquivo('perguntas.txt', function(frasesPorCategoria) {
        fraseElement.textContent = gerarFrasePorCategoria(categoriaSelecionada, frasesPorCategoria);
        });
}

// Event listener para o botão
const button = document.getElementById('generateButton');
        button.addEventListener('click', atualizarFrase);
// Chama a função inicialmente para exibir uma frase aleatória ao carregar a página atualizarFrase();
//
