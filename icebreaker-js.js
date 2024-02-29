// Array de frases
const frases = [
        "A vida é como uma caixa de chocolates, você nunca sabe o que vai receber.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "O pessimista vê dificuldade em cada oportunidade; o otimista vê oportunidade em cada dificuldade.",
        "O único modo de fazer um excelente trabalho é amar o que você faz.",
        "A persistência é o caminho do êxito.",
        "O segredo para conseguir é começar.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "A sorte favorece a mente preparada."
        ];
// Função para gerar uma frase aleatória
        function gerarFrase() {
        const randomIndex = Math.floor(Math.random() * frases.length);
                const randomFrase = frases[randomIndex];
                document.getElementById("randomPhrase").textContent = randomFrase;
                }

// Event listener para o botão
document.getElementById("generateButton").addEventListener("click", gerarFrase);
// Chamada inicial para exibir uma frase aleatória ao carregar a página
        gerarFrase();