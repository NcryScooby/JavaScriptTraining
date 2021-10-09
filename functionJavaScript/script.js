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