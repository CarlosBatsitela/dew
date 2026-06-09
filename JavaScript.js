// Uma variável é um nome simbólico para um valor.
// As variáveis são declaradas com a palavra-chave let:
let x; // Declara uma variável chamada x.

// Valores podem ser atribuídos às variáveis com o sinal =
x = 0; // Agora a variável x tem o valor 0

// JavaScript aceita vários tipos de valores
x = 1; // Números.
x = 0.01; // Números podem ser inteiros ou reais.
x = "hello world"; // Strings de texto entre aspas.
x = "JavaScript"; // Aspas simples também delimitam strings.
x = true; // Um valor booleano.
x = false; // O outro valor booleano.
x = null; // Null é um valor especial que significa "nenhum valor".
x = undefined; // Undefined é outro valor especial, como null.

// O tipo de dados mais importante de JavaScript é o objeto.
// Um objeto é uma coleção de pares nome/valor ou uma string para mapa de valores.
let book = {
  // Objetos são colocados entre chaves.
  topic: "JavaScript", // A propriedade "topic" tem o valor "JavaScript".
  edition: 7, // A propriedade "edition" tem o valor 7.
}; // A chave marca o fim do objeto.
// Acesse as propriedades de um objeto com . ou []:
book.topic; // => "JavaScript"
book["edition"]; // => 7: outro modo de acessar valores de propriedade.

book.author = "Flanagan"; // Crie novas propriedades por meio de atribuição.
book.contents = {}; // {} é um objeto vazio sem qualquer propriedade.

// Acessar condicionalmente propriedades com ?. (ES2020):
book.contents?.ch01?.sect1; // => undefined: book.contents não tem a propriedade ch01.

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
let primes = [2, 3, 5, 7]; // Um array de 4 valores, delimitados com [ e ].
primes[0]; // => 2: o primeiro elemento (índice 0) do array.
primes.length; // => 4: quantidade de elementos no array.
primes[primes.length - 1]; // => 7: o último elemento do array.
primes[4] = 9; // Adiciona um novo elemento por meio de atribuição.
primes[4] = 11; // Ou altera um elemento existente por meio de atribuição.
let empty = []; // [] é um array vazio, sem qualquer elemento.
empty.length; // => 0

// Os arrays e objetos podem conter outros arrays e objetos:
let points = [
  // Um array com 2 elementos.
  { x: 0, y: 0 }, // Cada elemento é um objeto.
  { x: 1, y: 1 },
];
let data = {
  // Um objeto com 2 propriedades
  trial1: [
    [1, 2],
    [3, 4],
  ], // O valor de cada propriedade é um array.
  trial2: [
    [2, 3],
    [4, 5],
  ], // Os elementos dos arrays são arrays.
};

// Os operadores atuam sobre os valores (operandos) para produzir um novo valor.
// Os operadores aritméticos são alguns dos mais simples:
3 + 2; // => 5: adição
3 - 2; // => 1: subtração
3 * 2; // => 6: multiplicação
3 / 2; // => 1.5: divisão
points[1].x - points[0].x; // => 1: operandos mais complicados também funcionam
"3" + "2"; // => "32": + soma números, ou concatena strings

// JavaScript define alguns operadores aritméticos de forma abreviada
let count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count; // => 6: nomes de variáveis também são expressões.

// Os operadores de igualdade e relacionais testam se dois valores são iguais,
// desiguais, menores que, maiores que etc. São avaliados como verdadeiros ou falsos.
let z = 2;
y = 3; // Esses sinais = são atribuições e não testes de igualdade.
z === y; // => falso: igualdade
z !== y; // => verdadeiro: desigualdade
z < y; // => verdadeiro: menor que
z <= y; // => verdadeiro: menor ou igual a
z > y; // => falso: maior que
z >= y; // => falso: maior ou igual a
"two" === "three"; // => falso: as duas strings são diferentes
"two" > "three"; // => verdadeiro: "tw" é alfabeticamente maior do que "th"
(false ===
  (z > y)(
    // => verdadeiro: falso é igual a falso
    // Os operadores lógicos combinam ou invertem valores booleanos
    z === 2,
  ) &&
  (y === 3)(
    // => verdadeiro: as duas comparações são verdadeiras. && é E
    z > 3,
  )) ||
  y < 3; // => falso: nenhuma das comparações é verdadeira. || é OU
!(z === y); // => verdadeiro: ! inverte um valor booleano

// Operadores de igualdade e relacionais
let c = 2,
  y = 3; // Esses sinais = são atribuições e não testes de igualdade.
c === y; // => falso: igualdade
c !== y; // => verdadeiro: desigualdade
c < y; // => verdadeiro: menor que
c <= y; // => verdadeiro: menor ou igual a
c > y; // => falso: maior que
c >= y; // => falso: maior ou igual a
"two" === "three"; // => falso: as duas strings são diferentes
"two" > "three"; // => verdadeiro: "tw" é alfabeticamente maior do que "th"
(false ===
  (c > y)(
    // => verdadeiro: falso é igual a falso


#

// CONVERSÃO DE TIPOS

// String => número

// Number()
// Tenta converter toda a string para um número válido
Number("10.99"); // 10.99
Number("10.99 anos"); // NaN

// parseInt()
// Extrai apenas a parte inteira do início da string
parseInt("10.99"); // 10
parseInt("10.99 anos"); // 10
parseInt("há 10.99 anos"); // NaN

// parseFloat()
// Extrai um número decimal do início da string
parseFloat("10.99"); // 10.99
parseFloat("10.99 anos"); // 10.99
parseFloat("anos 10.99"); // NaN

// Verificação de tipo
typeof 10; // "number"
typeof 10.99; // "number"
typeof "10"; // "string"
typeof NaN; // "number"

_______________________________________;

// Número => string
String(10); // "10"
String(10.99); // "10.99"

_______________________________________;

// Número => booleano
Boolean(1); // true
Boolean(0); // false
Boolean(-1); // true

_______________________________________;

// Booleano => número
Number(true); // 1
Number(false); // 0

_______________________________________;

// Valores Truthy e Falsy
// Valores avaliados implicitamente como verdadeiro ou falso

Boolean(""); // false
Boolean("JavaScript"); // true

Boolean(null); // false
Boolean(undefined); // false

Boolean([]); // true
Boolean({}); // true

_______________________________________;

// Operações entre strings e números

// Soma
// O número é convertido para string e ocorre concatenação
"5" + 1; // "51"

// Outras operações: o JavaScript tenta converter a string para número
// Subtração
"5" - 1; // 4

// Multiplicação
"5" * 1; // 5

// Divisão
"5" / 1; // 5

_______________________________________;

// Conversões implícitas
// O JavaScript converte automaticamente valores para realizar operações
true + 1; // 2
false + 1; // 1

null + 1; // 1
undefined + 1; // NaN

_______________________________________;

// Null e Undefined
// Representam ausência de valor, mas possuem significados diferentes

// Undefined
// A variável foi declarada, mas ainda não recebeu valor
let name;
console.log(name); // undefined

// Null
// A ausência de valor foi definida intencionalmente pelo programador
let city = null;
console.log(city); // null

_______________________________________;

// Operador OR (||)
// Retorna o primeiro valor verdadeiro encontrado
// Ou seja, utiliza um valor padrão quando o valor à esquerda é considerado falso

// Com o uso do OR
let userName = "";
console.log(userName || "Visitante"); // "Visitante"

// Sem o uso do OR
if (userName) {
  console.log(userName);
} else {
  console.log("Visitante"); // "Visitante"
}

// Outro exemplo usando OR
userName = "Sabrina";
console.log(userName || "Visitante"); // "Sabrina"

_______________________________________;

// Operador Nullish Coalescing (??)
// Define um valor padrão quando a variável é null ou undefined

// Com o uso do Nullish
let firstName = null;
console.log(firstName ?? "Visitante"); // "Visitante"

// Sem o uso do Nullish
if (firstName === null || firstName === undefined) {
  console.log("Visitante");
} else {
  console.log(firstName); // "Visitante"
}

// Outro exemplo do uso do Nullish
firstName = "Sabrina";
console.log(firstName ?? "Visitante"); // "Sabrina"
_______________________________________;

// Comparações curiosas
0 == false; // true
"" == false; // true

null == undefined; // true
null === undefined; // false

// Recomenda-se utilizar sempre comparação estrita:
5 === "5"; // false
5 !== "5"; // true

_______________________________________;

// MÉTODOS PARA STRINGS
let languageName = "JavaScript";

// length
// Retorna a quantidade de caracteres da string
console.log(languageName.length); // 10

// toUpperCase()
// Converte todos os caracteres para maiúsculo
console.log(languageName.toUpperCase()); // JAVASCRIPT

// toLowerCase()
// Converte todos os caracteres para minúsculo
console.log(languageName.toLowerCase()); // javascript

// includes()
// Verifica se a string contém um trecho informado
console.log(languageName.includes("Script")); // true

// startsWith()
// Verifica se a string inicia com o texto informado
console.log(languageName.startsWith("Java")); // true

// endsWith()
// Verifica se a string termina com o texto informado
console.log(languageName.endsWith("Script")); // true

// indexOf()
// Retorna a posição da primeira ocorrência encontrada
console.log(languageName.indexOf("a")); // 1
console.log(languageName.indexOf("w")); // -1, caractere não encontrado

// Template Strings
// Utilizam crases e ${} para inserir variáveis ou expressões
console.log("Estamos aprendendo " + languageName + "!"); // Forma tradicional de concatenar strings
console.log(`Estamos aprendendo ${languageName}!`); // Template strings utiliza crases e ${} para inserir variáveis ou expressões

_______________________________________;

// ESTRUTURAS CONDICIONAIS
let mediaDasNotas = 7;

// If
// Executa um bloco de código quando a condição é verdadeira
if (mediaDasNotas >= 6) {
  console.log("Aprovado");
}

// If / Else
// Executa um bloco se a condição for verdadeira e outro se for falsa
if (mediaDasNotas >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Else If
// Permite testar múltiplas condições em sequência
if (mediaDasNotas >= 9) {
  console.log("Aprovação com mérito");
} else if (mediaDasNotas >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Operador Ternário
// Forma reduzida de escrever uma condição simples
mediaDasNotas >= 6 ? console.log("Aprovado") : console.log("Reprovado");

// Switch
// Executa blocos de código com base em diferentes valores possíveis
let day = 2;
// day = 0;

switch (day) {
  case 1:
    console.log("Domingo");
    break;

  case 2:
    console.log("Segunda-feira");
    break;

  case 3:
    console.log("Terça-feira");
    break;

  default:
    console.log("Dia inválido"); // Se nenhum case for encontrado, o bloco default será executado
}

_______________________________________;

// LOOPS
// Permitem repetir um bloco de código várias vezes

// While
// Repete um bloco de código enquanto uma condição for verdadeira
let i = 1;

while (i <= 5) {
  console.log("i: " + i);
  i++;
}

// Do While
// Executa o bloco ao menos uma vez e continua repetindo enquanto a condição for verdadeira
let j = 1;

do {
  console.log("j: " + j);
  j++;
} while (j <= 5);

/* Loop infinito
Ocorre quando a condição de parada nunca é atingida

while (true) {
  console.log("Loop infinito");
}

Como evitar: Certifique-se de que a variável de controle seja atualizada corretamente */

// For
// Utilizado quando a quantidade de repetições é conhecida e há uma variável de controle
for (let k = 1; k <= 5; k++) {
  console.log("k: " + k);
}