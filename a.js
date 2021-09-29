function toCamelCase(str) {
  const array = str.split(/[^a-zA-Z0-9]+/g); //transforma a string em array, separando pelos caracteres especiais;
  const arrayUpper = array.map((elem, index) => { //passa um loop no array
    let upper;
    if (index !== 0) {
      // se nao for igual ao primeiro primeiro elemento ele coloca a primeira letra da string em upperCase;
      upper = elem[0].toUpperCase();
    } else {
      upper = elem[0]; // se nao ele fica com a string normal no caso o primeiro elemento do array vai ficar com a primeira letra normal
    }
    const newStr = elem.substring(1); // pego a string a partir do 1 elemento entao ele tira o elemento 0 
    const result = upper + newStr; // faço a concatenacao da primeira letra com o restante
    return result; // e retorno o resultado
  });
  return arrayUpper.join(''); // retorno a funcao colocando o join que vai juntar tudo
}

console.log(toCamelCase('aucas_mazuca_godoi'));
