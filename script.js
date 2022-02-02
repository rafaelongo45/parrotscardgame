let lista = [];
let qtdCartas = null;
let listaCartas = [];

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
    for (let i = 0; i < qtdCartas; i++){
        listaCartas.push('<div class = "container"><img src="./imagens/front.png" alt="parrot card"></div>');
        main.innerHTML = main.innerHTML + listaCartas[i];
    }
}
//<div class = "container"><img src="./imagens/front.png" alt="parrot card"></div>

function comparador() { 
	return Math.random() - 0.5; 
}

listaCartas.sort(comparador); 
checaQuantidade();
adicionaCartas();