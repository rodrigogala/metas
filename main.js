const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");

for (let i=0;i<botoes.length;i++){
    botoes[i].onclick=function(){

        for(let j=0;j>botoes.length;j++){
            botões[j].classlit.classlit.remove("ativo");
            textos[j].classlit.classlit.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        textos[i].classlist.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date("2024-10-05T00:00:00");
let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;