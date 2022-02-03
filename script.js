let lista = [];
let qtdCartas = null;
let nomeGifs = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot'];
let listaCartas = [];

nomeGifs.sort(comparador);

function checaQuantidade(){
    for (let i = 4; i<=14;i+=2){
        lista.push(i);
    }

    qtdCartas = prompt("quantasccsatas?");
    qtdCartas = parseInt(qtdCartas);


    while(lista.includes(qtdCartas) == false){
        qtdCartas = prompt("cartas?");
        qtdCartas = parseInt(qtdCartas);
    }

}

function adicionaCartas(){
    const main = document.querySelector("main");
    for (let i = 0; i < qtdCartas/2; i++){
        listaCartas.push(`<section onclick="clicarCarta(this)"><div class="container front"><img src="./imagens/front.png" alt="parrot card"></div><div class="back container nao-aparece"><img src="./imagens/${nomeGifs[i]}.gif" alt="parrot card"></div></section>`);
        listaCartas.push(`<section onclick="clicarCarta(this)"><div class="container front"><img src="./imagens/front.png" alt="parrot card"></div><div class="back container nao-aparece"><img src="./imagens/${nomeGifs[i]}.gif" alt="parrot card"></div></section>`);
    }

    listaCartas.sort(comparador)
    for (let i = 0; i < listaCartas.length; i++){
        main.innerHTML = main.innerHTML + listaCartas[i];
    }
}

function clicarCarta(elemento){
    let divBack = elemento.querySelector('.back');  
    let divFront = elemento.querySelector('.front');  
    divBack.classList.remove('nao-aparece');
    divFront.classList.add('nao-aparece');
}

function comparador() { 
	return Math.random() - 0.5; 
}


checaQuantidade();
adicionaCartas();