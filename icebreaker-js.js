/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Armazenar frases já mostradas por categoria
const frasesJaMostradas = {};

// Função para carregar e processar as frases do arquivo de texto
function carregarFrasesDoArquivo(url, callback) {
  const request = new XMLHttpRequest();
  request.open("GET", url, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      const linhas = request.responseText.split("\n");
      let categoriaAtual = "";
      const frasesPorCategoria = {};
      linhas.forEach(function (linha) {
        if (linha.trim() !== "") {
          if (linha.trim().toLowerCase() === linha.trim()) {
            categoriaAtual = linha.trim();
            frasesPorCategoria[categoriaAtual] = [];
            frasesJaMostradas[categoriaAtual] = []; // Inicializa o array de frases já mostradas
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

// Função para gerar uma frase aleatória de uma categoria específica sem repetição
function gerarFrasePorCategoria(categoria, frasesPorCategoria) {
  if (categoria in frasesPorCategoria) {
    // Se a categoria existir, escolhe uma frase aleatória dessa categoria sem repetição
    const frasesDaCategoria = frasesPorCategoria[categoria];
    const frasesMostradas = frasesJaMostradas[categoria];
    const frasesDisponiveis = frasesDaCategoria.filter(
      (frase) => !frasesMostradas.includes(frase)
    );

    if (frasesDisponiveis.length === 0) {
      // Se todas as frases já foram mostradas, reinicia a lista de frases mostradas
      frasesJaMostradas[categoria] = [];
      frasesDisponiveis.push(...frasesDaCategoria);
    }

    const indice = Math.floor(Math.random() * frasesDisponiveis.length);
    const fraseSelecionada = frasesDisponiveis[indice];

    // Adiciona a frase selecionada à lista de frases já mostradas
    frasesJaMostradas[categoria].push(fraseSelecionada);

    return fraseSelecionada;
  } else if (categoria === "all") {
    // Se a categoria selecionada for "Todas", exclui as categorias da seleção aleatória
    const categoriasExcluidas = [
      "picante",
      "nuncapicante",
      "temas",
      "namoro",
      "emprego"
    ];
    const categorias = Object.keys(frasesPorCategoria).filter(
      (cat) => !categoriasExcluidas.includes(cat)
    );
    const categoriaAleatoria =
      categorias[Math.floor(Math.random() * categorias.length)];
    const frasesAleatorias = frasesPorCategoria[categoriaAleatoria];
    const indice = Math.floor(Math.random() * frasesAleatorias.length);
    return frasesAleatorias[indice];
  } else {
    return "Categoria não encontrada.";
  }
}

// Função para atualizar o texto da frase
function atualizarFrase() {
  const categoriaSelecionada = document.getElementById("categorySelect").value;
  const fraseElement = document.getElementById("randomPhrase");
  // Gerar as frases aleatórias ao carregar a página e exibir a selecionada
  carregarFrasesDoArquivo("perguntas.txt", function (frasesPorCategoria) {
    fraseElement.textContent = gerarFrasePorCategoria(
      categoriaSelecionada,
      frasesPorCategoria
    );
  });
}

// Event listener para o botão
const button = document.getElementById("generateButton");
button.addEventListener("click", atualizarFrase);

// Chama a função inicialmente para exibir uma frase aleatória ao carregar a página
atualizarFrase();


//BOTÃO POP UP
// Obtém o modal
        var modalSobre = document.getElementById("modalSobre");
// Obtém o botão que abre o modal
        var btnSobre = document.getElementById("btnSobre");
// Quando o usuário clica no botão, abre o modal
        btnSobre.onclick = function() {
        modalSobre.style.display = "block";
                }

// Função para fechar o modal
function fecharModal() {
modalSobre.style.display = "none";
        }
//
//
