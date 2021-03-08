// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

function palindroma (parola) {
  for ( var i = 0; i < parola.length; i++) {
    console.log(parola[i]);
  }
  for ( var j = parola.length; j < 1; j--) {
    console.log(j);
    console.log(parola.length);
  }
}

var utente = palindroma(prompt("Inserisci una parola"));
