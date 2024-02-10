const perguntas = [
  {
    pergunta: "O que é JavaScript?",
    respostas: [
      "Um framework de desenvolvimento web",
      "Uma linguagem de programação de alto nível",
      "Um sistema operacional",
    ],
    correta: 1,
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: ["32", "5", "NaN"],
    correta: 0,
  },
  {
    pergunta: "Qual é o operador de comparação estrita em JavaScript?",
    respostas: ["==", "===", "!="],
    correta: 1,
  },
  {
    pergunta:
      "Qual é a função usada para imprimir algo no console em JavaScript?",
    respostas: ["console.log()", "print()", "log()"],
    correta: 0,
  },
  {
    pergunta: "O que a função parseInt() faz em JavaScript?",
    respostas: [
      "Analisa um objeto JSON",
      "Converte uma string para um inteiro",
      "Arredonda um número para o inteiro mais próximo",
    ],
    correta: 1,
  },
  {
    pergunta: "Como você escreve um comentário de uma linha em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "' Este é um comentário",
      "/* Este é um comentário */",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
    respostas: ["function", "declare", "method"],
    correta: 0,
  },
  {
    pergunta:
      "Qual é a maneira correta de escrever um loop 'for' em JavaScript?",
    respostas: [
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for (i <= 5; i++)",
    ],
    correta: 0,
  },
  {
    pergunta:
      "Qual é o método usado para adicionar um elemento ao final de um array em JavaScript?",
    respostas: ["push()", "append()", "addToEnd()"],
    correta: 0,
  },
  {
    pergunta: "Qual é o resultado de typeof 'hello' em JavaScript?",
    respostas: ["string", "object", "function"],
    correta: 0,
  },
];

// busca elemento com id quiz
const quiz = document.querySelector("#quiz");
// busca a tag template
const template = document.querySelector("template");

// New set cria um novo conjunto com números únicos e não repetidos
const corretas = new Set();
const totalDePerguntas = perguntas.length; //soma a quantidade de perguntas
const mostrarTotal = document.querySelector("#acertos span"); //procura o id acertos e me dê o span - elemento filho

for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;

    // Acha o input e muda o valor do atributo nome pra pergunta-índice do objeto da array
    dt.querySelector("input").setAttribute(
      "name",
      "pergunta-" + perguntas.indexOf(item)
    );

    // Vai mudar o valor do input pro índice da resposta selecionada
    dt.querySelector("input").value = item.respostas.indexOf(resposta);

    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta;

      if (estaCorreta === true) {
        corretas.add(item);
      } else {
        corretas.delete(item);
      }

      // Atualiza o numero de corretas
      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
