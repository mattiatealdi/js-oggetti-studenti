$(document).ready(function(){

  studente = {
    nome : "Tizio",
    cognome : "Caio",
    età : 24
  }


  for(var key in studente){
    console.log(key);
  }


  var arrayStudenti = [
    {
      nome: "Bianca",
      cognome: "Bianchi",
      età: 23
    },
    {
      nome: "Alfredo",
      cognome: "Scotti",
      età: 56
    },
    {
      nome: "Alessio",
      cognome: "Spalletti",
      età: 81
    }
  ]

  newStudent(arrayStudenti);


  for(var student of arrayStudenti){
    for(var myKey in student){
      console.log("Proprietà: " + myKey + " Valore: " + student[myKey]);
    }
    console.log("------------------");
  }


  function newStudent(target){
    var newName = prompt("Inserire il nome dello studente: ");
    var newSurname = prompt("Inserire il cognome dello studente");
    var newAge = prompt("Inserire l'età dello studente");
    studente.nome = newName;
    studente.cognome = newSurname;
    studente.età = newAge;
    target.push(studente);
  }

});