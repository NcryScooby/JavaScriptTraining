function idadePessoas(idade) {

    const bebeMenor = 0, bebeMaior = 2;
    const criancaMenor = 2, criancaMaior = 12;
    const adolescenteMenor = 18, adolescenteMaior = 25;
    const JovemMenor = 25, JovemMaior = 60;
    

  if (idade >= bebeMenor && idade <= bebeMaior) {
    console.log("Bebê");
  } else if (idade > criancaMenor && idade < criancaMaior) {
    console.log("Criança");
  } else if (idade > adolescenteMenor && idade < adolescenteMaior) {
    console.log("Adolescente");
  } else if (idade > 18 && idade < 25) {
    console.log("Jovem");
  } else if (idade > JovemMenor && idade < JovemMaior) {
    console.log("Adulto");
  } else {
    console.log("Idoso");
  }
}

idadePessoas(1);
