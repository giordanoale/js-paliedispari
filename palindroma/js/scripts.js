// Chiedere all’utente di inserire una parola

var utente = prompt("Inserisci una parola");
utente = utente.toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma

function palindroma(parola) {

  var parolaRev = "";

  for ( var j = parola.length - 1; j >= 0; j--) {
    parolaRev += parola[j];
  }

  return parolaRev;

}

var utenteRev = palindroma(utente);

console.log(utente);
console.log(utenteRev);

if (utente == utenteRev) {
  console.log( utente + " è una parola palindroma");
} else {
  console.log( utente + " non è una parola palidroma");
}
