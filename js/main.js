
// dichiarare email varie
var listaMail = ['alessandro@gmail.com' , 'eleonora@gmail.com', 'simone@hotmail.com', 'valerio@hotmail.it'];

// chiedere email utente
var checkMail = prompt('inserisci la tua email');
var mail = false;

// condizioni per entrare o essere rifiutati
for (var i = 0; i < listaMail.length; i++) {
  var lista = listaMail[i];
  if(lista == checkMail){
    mail = true;
  }
}

if (mail == true){
  alert('Complimenti, puoi accedere ai nostri contenuti esclusivi');
}else{
  alert('mi dispiace, email non riconosciuta');
}
