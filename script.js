let lista = [];
let qtdCartas = null;
let nomeGifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot', 'unicornparrot'];
let listaCartas = [];
let clique = 0;
let sectionEscolhida = null;
let primeiraCartaHTML = null;
let primeiraCartaFront = null;
let primeiraCartaBack = null;
let segundaCartaFront = null;
let segundaCartaBack = null;
let jogadas = 0;
let travaTudo = false;
let verificaFront = null;
let reiniciaJogo = null;
let relogio = 0;
let intervalo = null;
let relogioClasse = null;

nomeGifs.sort(comparador);

function checaQuantidade() {
    for (let i = 4; i <= 14; i += 2) {
        lista.push(i);
    }

    qtdCartas = prompt("Com quantas cartas quer jogar? (De 4 a 14, apenas números pares)");
    qtdCartas = parseInt(qtdCartas);


    while (lista.includes(qtdCartas) == false) {
        qtdCartas = prompt("Com quantas cartas quer jogar? (De 4 a 14, apenas números pares)");
        qtdCartas = parseInt(qtdCartas);
    }

}

function adicionaCartas() {
    const main = document.querySelector("main");
    for (let i = 0; i < qtdCartas / 2; i++) {
        listaCartas.push(`<section onclick="clicarCarta(this)" data-identifier="card"><div class="container front" data-identifier="back-face"><img src="./imagens/front.png" alt="parrot card"></div><div class="back container nao-aparece" data-identifier="front-face"><img src="./imagens/${nomeGifs[i]}.gif" alt="parrot card"></div></section>`);
        listaCartas.push(`<section onclick="clicarCarta(this)" data-identifier="card"><div class="container front" data-identifier="back-face"><img src="./imagens/front.png" alt="parrot card"></div><div class="back container nao-aparece" data-identifier="front-face"><img src="./imagens/${nomeGifs[i]}.gif" alt="parrot card"></div></section>`);
    }

    listaCartas.sort(comparador)
    for (let i = 0; i < listaCartas.length; i++) {
        main.innerHTML = main.innerHTML + listaCartas[i];
    }

    main.innerHTML = main.innerHTML + "<span class = 'relogio'>0</span>";
}

function clicarCarta(elemento) {
    if (travaTudo === true) {
        return;
    }
    if (elemento === sectionEscolhida) {
        return;
    }    

    if (clique === 0){
        intervalo = setInterval(timer, 1000);
    }
    let divBack = elemento.querySelector('.back');
    let divFront = elemento.querySelector('.front');
    sectionEscolhida = elemento;
    segundaCartaFront = divFront;
    segundaCartaBack = divBack;
    divBack.classList.remove('nao-aparece');
    divFront.classList.add('nao-aparece');
    clique = clique + 1;
    jogadas = jogadas + 1;
    
    if (clique === 1) {
        primeiraCartaHTML = elemento.innerHTML;
        primeiraCartaFront = divFront;
        primeiraCartaBack = divBack;
    }
    else if (clique === 2) {
        if (primeiraCartaHTML === elemento.innerHTML) {
            primeiraCartaFront.remove();
            segundaCartaFront.remove();
            clique = null;
            setTimeout(verificarGanhou, 500);
        } else {
            travaTudo = true;
            setTimeout(desviraCartas, 1000);
            clique = null;
        }
    }
}

function verificarGanhou() {
    verificaFront = document.querySelectorAll('.front');
    if (verificaFront.length === 0) {
        clearInterval(intervalo);
        alert(`Você ganhou em ${jogadas} jogadas e em ${relogio} segundos`)
        reiniciaJogo = prompt('Quer jogar novamente? s ou n');
    }

    if (reiniciaJogo === 's'){
        window.location.reload();
    }else if(reiniciaJogo === 'n'){
        window.location = "https://www.driven.com.br/"
    }
}

function desviraCartas() {
    primeiraCartaFront.classList.remove('nao-aparece');
    primeiraCartaBack.classList.add('nao-aparece');
    segundaCartaBack.classList.add('nao-aparece');
    segundaCartaFront.classList.remove('nao-aparece');
    resetarJogo();
}

function resetarJogo() {
    primeiraCartaHTML = null;
    primeiraCartaFront = null;
    primeiraCartaBack = null;
    segundaCartaFront = null;
    segundaCartaBack = null;
    sectionEscolhida = null;
    travaTudo = false;
}

function comparador() {
    return Math.random() - 0.5;
}

function timer(){
    relogioClasse = document.querySelector('.relogio');
    relogio = relogio + 1;
    relogioClasse.innerHTML = relogio;
}

checaQuantidade();
adicionaCartas();