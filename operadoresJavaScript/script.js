//1.Operadores Aritimético(Matemáticos)-------------------------

let salario = 100;

// + , - , * , / , **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

//++ --

let idade = 18;

console.log(++idade);

//2.Operadores Atribuição------------------------------

let valorTecladoGamer = 100;

//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

//valorTecladoGamer = valorTecladoGamer - valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);

//3.Operadores de igualdade---------------------------------

//Igualdade Estrita
console.log(1 === 1)
console.log('1' === 1)

//igualdade solta
console.log(1 == 1);
console.log('1' == 1);

//4.Operadores ternário------------------------------------

//tem um cliente, se tiver 100+ pontos = premium, senão = comum;

let pontos = 100;
let tipo = pontos >= 100 ? 'premium' : 'comum';

console.log(tipo);

//5.Operadores Lógicos (&&)
//&& Retorna true se os dois operandos forem true
console.log(true && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

//|| Retorna true se um dos operandos forem true

let maiorDeIdade2 = false;
let possuiCarteiraDeTrabalho2 = false;
let podeAplicar2 = maiorDeIdade2 || possuiCarteiraDeTrabalho2;

console.log('Pode Aplicar: ', podeAplicar2);

//Operador NOT (!)
let canditadoRecusado = !podeAplicar2

console.log('Canditado Recusado' , canditadoRecusado);