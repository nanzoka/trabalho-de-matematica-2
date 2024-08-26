const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual o personagem principal do minecraft?",
        alternativas: [
            {
                texto: "steve",
                afirmacao: "steve,"
            },
            {
                texto: "alex",
                afirmacao: "steve,"
            }
        ]
    },{
        enunciado: "qual monstro da mais dano?",
        alternativas: [
            {
                texto: "creeper",
                afirmacao: "creeper carregado,"
            },
            {
                texto: "creeper carregado",
                afirmacao: "creeper carregado,"
            }
        ]
    },
    {
        enunciado: "qual o boss final do jogo?",
        alternativas: [
            {
                texto: "ender dragon",
                afirmacao: "ender dragon,"
            },
            {
                texto: "whiter",
                afirmacao: "ender dragon,"
            }
        ]
    },
    {
        enunciado: "qual a melhor farm do minecraft",
        alternativas: [
            {
                texto: "farm de mob",
                afirmacao: "ferm de mob,"
            },
            {
                texto: "farm de minerio",
                afirmacao: "farm de mob,"
            }
        ]
    },
    {
        enunciado: "minecraft foi criado quando?",
        alternativas: [
            {
                texto: "17 de maio de 2009",
                afirmacao: "17 de maio de 2009,"
            },
            {
                texto: "18 de novembro de 2011",
                afirmacao: "17 de maio de 2009,"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "respostas erradas(alex,creeper,whiter,farm de minerio,18 de novembro de 2011)";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "respostas corretas";
}

mostraPergunta();