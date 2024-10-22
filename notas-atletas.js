let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedias(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let atleta = atletas[i];
    let notas = atleta.notas.sort((a, b) => a - b); // Ordena as notas
    let notasComputadas = notas.slice(1, notas.length - 1); // Remove a menor e a maior nota
    
    let soma = 0;
    notasComputadas.forEach(nota => {
      soma += nota; // Soma as notas válidas
    });

    let media = soma / notasComputadas.length; // Calcula a média

    // Apresenta os resultados
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${notas.join(", ")}`);
    console.log(`Média Válida: ${media}`);
    console.log(""); // Linha em branco para separar os resultados
  }
}

// Chama a função para calcular as médias
calcularMedias(atletas);
