// dichiarazione variabili
var nomeGiocatore1 = prompt("inserisci il nome del primo giocatore");

var giocatore = document.getElementById('umano');

// Funzione bottone e calcoli del gioco
giocatore.addEventListener('click', function(){

  var punteggioUmano= Math.floor(Math.random() * 6) + 1;
  alert(nomeGiocatore1+' hai realizzato '+punteggioUmano+" punti");
  var punteggioComputer= Math.floor(Math.random() * 6) + 1;
  alert('Il computer ha realizzato '+punteggioComputer+" punti");

// regole per vincere perdere o pareggiare
  if(punteggioUmano > punteggioComputer) {
    alert('complimenti, hai vinto');
  }else if (punteggioUmano == punteggioComputer) {
    alert('Pari. Nessun vincitore');
  }else {
    alert('hai perso');
  }

})