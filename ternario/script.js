let nota;

function calcularNota (nota){
    resultado = nota >= 6 ? 'Aprovado' : 'Reprovado';
    return resultado; 
}

console.log(calcularNota(6));
console.log(resultado);

//--------------------------------------------//

let nota1 = 2, nota2 = 5;

function calculadora(){
    total = nota1 * nota2;
    return total;
}

console.log(calculadora())