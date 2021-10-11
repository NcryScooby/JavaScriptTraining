function verificarIdade(idade){

    const maiorDeIdade = 18;

    if (idade >= maiorDeIdade){
        console.log('Você pode comprar bebida!')
    } else {
        console.log('Você não pode comprar bebida!')
    }
}

verificarIdade(17);

//Com ternário

function verificarIdade2(idade2){

    const maiorDeIdade2 = 18;

    resultado = idade2 >= maiorDeIdade2 ? 'Você pode comprar bebida!' : 'Você não pode comprar bebida!'
    return resultado;
}

console.log(verificarIdade2(17));