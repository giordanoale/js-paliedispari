// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

var utente;

var numero1 = -1;

while (utente != "pari" && utente != "dispari") {
  utente = prompt("Scegli se pari o dispari");
  utente = utente.toLowerCase();
}

console.log(utente);

while (numero1 < 0 || numero1 > 5){
  var numero1 = parseInt(prompt("Scegli un numero da 1 a 5"));
}

console.log(numero1);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

function random (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numero2 = random(1,5);

console.log(numero2);

// Sommiamo i due numeri

var somma = numero1 + numero2;

console.log(somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function ifEven (num) {
  if (num % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

console.log(ifEven(somma));

var risultato = ifEven(somma);

// Dichiariamo chi ha vinto.

if (utente == risultato) {
  console.log("Hai vinto!");
} else {
  console.log("Ha vinto il computer!");
}
