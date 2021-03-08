// Chiedere all’utente di inserire una parola

var utente = prompt("Inserisci una parola");
utente = utente.toLowerCase();

// Creare una funzione per capire se la parola inserita è palindroma

// Questa funzione prende una parola e la scrive al contrario in una nuova variabile
function palindroma(parola) {

  var parolaRev = "";

  for ( var j = parola.length - 1; j >= 0; j--) {
    parolaRev += parola[j];
  }

  return parolaRev;

}

var utenteRev = palindroma(utente);


document.getElementById("scelta").innerHTML = "Hai scelto la parola " + utente;

if (utente == utenteRev) {
  document.getElementById("risultato").innerHTML = utente + " è una parola palindroma";
} else {
  document.getElementById("risultato").innerHTML = utente + " non è una parola palindroma";
}
