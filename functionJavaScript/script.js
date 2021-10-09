// Verbo + Substantivo

let corSite = "branco";

function resetaCor(){
    corSite = "verde";
}

console.log(corSite);
resetaCor();
console.log(corSite);

//

let corPessoa = "branca";

function corNegra(){
    corPessoa = "negra";
}

corNegra();

console.log(corPessoa);

//

let corLapis = "vermelho"

function trocaCor(cor, tonalidade){
    corLapis = cor + tonalidade;
}

trocaCor("verde", " fraco");

console.log(corLapis);

////////////////////////////////////////////////////////////////// Tipos de Funções

//Realizar uma tarefa, não devolve nada
function dizerNome(){
    console.log('Fabricio');
}

dizerNome();

//Faz um calculo e operação e retorna algo
function multiplicarPorDois(valor){
    return valor * 2;
}

//console.log(multiplicarPorDois(5));

let resultado = (multiplicarPorDois(5));

console.log(resultado);