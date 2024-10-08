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

// Função para processar o conteúdo do arquivo e organizar por categorias
function processarPerguntas(texto) {
    const categorias = {};
    const linhas = texto.split('\n').map(linha => linha.trim());

    let categoriaAtual = '';

    linhas.forEach(linha => {
        if (linha.startsWith('[') && linha.endsWith(']')) {
            // Nova categoria detectada
            categoriaAtual = linha.slice(1, -1); // Remove os colchetes
            categorias[categoriaAtual] = [];
        } else if (linha) {
            // Adiciona a questão à categoria atual
            if (categoriaAtual) {
                categorias[categoriaAtual].push(linha);
            }
        }
    });

    return categorias;
}

// Função para selecionar uma pergunta aleatória de uma categoria
function gerarPerguntaAleatoria(categorias, categoria) {
    if (categorias[categoria] && categorias[categoria].length > 0) {
        const indexAleatorio = Math.floor(Math.random() * categorias[categoria].length);
        const pergunta = categorias[categoria][indexAleatorio];
        
        // Remover a questão do array para evitar repetição
        categorias[categoria].splice(indexAleatorio, 1);

        return pergunta;
    } else {
        return 'Nenhuma pergunta restante nesta categoria.';
    }
}

// Função para iniciar o processo de gerar perguntas aleatórias
async function iniciarGeradorDePerguntas() {
    const texto = await lerArquivoTexto('perguntas.txt'); // Substitua pelo caminho correto
    const categorias = processarPerguntas(texto);

    // Exemplo de uso
    console.log('Pergunta de Matemática: ', gerarPerguntaAleatoria(categorias, 'Matemática'));
    console.log('Pergunta de História: ', gerarPerguntaAleatoria(categorias, 'História'));
    
    // Caso deseje exibir as categorias disponíveis
    console.log('Categorias disponíveis:', Object.keys(categorias));
}

// Chamar a função para iniciar o gerador de perguntas
iniciarGeradorDePerguntas();


// Event listener para o botão
const button = document.getElementById("generateButton");
button.addEventListener("click", atualizarFrase);
*/

/* // Chama a função inicialmente para exibir uma frase aleatória ao carregar a página
atualizarFrase(); */
// Define a frase inicial ao carregar a página
definirFraseInicial();


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


----------------------------------------------
  /*
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

// Função para definir a frase inicial
function definirFraseInicial() {
  const fraseElement = document.getElementById("randomPhrase");
  fraseElement.textContent = "\"Vamos começar?\"";
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
    */
  });
}


