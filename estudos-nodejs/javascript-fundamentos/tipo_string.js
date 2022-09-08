// TIPO STRING

const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo2!';

const senha = "huakloNIAmpshu9SHu2miS!;"
const citacao = 'Eu disse: "Olá, Mundo!"';

console.log(texto1);
console.log(texto2);

console.log(senha);
console.log(citacao);


// CONCATENACAO DE STRINGS

const ola = "Olá";
const mundo = "mundo";

console.log(ola + ", " + mundo + " concatenado!");


// TEMPLATE STRING OU TEMPLATE LITERAL

const texto3 = "Olá, mundo das templates strings!"
const literal = `${texto3}`;

const random = Math.floor(Math.random(1, 10) * 100); 

console.log(literal);
console.log(`Meu numero aleatorio é: ${random}`);


// TRANSFORMACAO DO CODIGO UNICODE EM CARACTERE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// METODOS LOWER CASE

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


// METODO LENGTH

const pass = "minhaSenha123"
console.log(pass.length) // 13 caracteres