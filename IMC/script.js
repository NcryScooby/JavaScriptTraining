let imc;
let peso, altura;

function calcularImc(peso, altura){
    imc = peso / (altura * altura);
    return imc;
}

calcularImc();

console.log(calcularImc(90, 175));

document.write(calcularImc(90, 175));