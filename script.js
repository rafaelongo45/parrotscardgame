let lista = [];
let qtdCartas = null;
let nomeGifs = ['bobrossparrot','explodyparrot','fiestaparrot','metalparrot','revertitparrot','tripletsparrot','unicornparrot'];
let listaCartas = [];
let clique = 0;
let primeiraCartaHTML = null;

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
    clique = clique + 1;

    if (clique === 1){
        primeiraCartaHTML = elemento.innerHTML;
    }
    if (clique === 2){
        if(primeiraCartaHTML === elemento.innerHTML){
            clique = 0;
        }else{
            setTimeout(desviraCartas, 1000);
            clique = 0;
        }
    }
}

function desviraCartas(){
    const frentes = document.querySelectorAll('.front')
    const costas = document.querySelectorAll('.back')
    for (let i = 0; i < listaCartas.length; i++){
        if (frentes[i].classList.contains('nao-aparece')){
            frentes[i].classList.remove('nao-aparece');
            costas[i].classList.add('nao-aparece');
        }
    }
}

function comparador() { 
	return Math.random() - 0.5; 
}


checaQuantidade();
adicionaCartas();