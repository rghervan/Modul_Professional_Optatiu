/**********************
 * Sentència if / else
 ********/
/*
var nom = 'Pau';
var estatCivil = 'solter';
var estaCasat = true;

if (estaCasat){
    //si la condició és verdadera
    console.log(nom + ' està casat');
}else {
    //si la condició és falsa
    console.log(nom + ' està solter');
}
    */

/**********************
 * Sentències condicionals
 */

/*var nom = 'Pau';
var edat = 8;

// edat < 12 és un nen.
// edat > 11, és < 18, és un adolescent.
// edat > 17, és < 60, és un adult.
// edat > 60, és un ancià.

if (edat < 12){
    console.log(nom + ' és un nen.');
}else if ((edat > 11) && (edat < 18)){
    console.log(nom + ' és un adolescent.');
}else if ((edat > 17) && (edat < 60)){
    console.log(nom + ' és un adult.');
}else{
    console.log(nom + ' és un ancià.');
}*/

/************************
 * Operador ternari
 */

 /*var nom = 'Pau';
 var edat = 16;

 edat >= 18 ? console.log(nom + ' és major d\'edat') : console.log(nom + ' és un adolescent');

 /**********************
  * Sentència Switch
  */

  /*var mes = 8;
  switch(mes){
      case 1:
        console.log('Gener');
        break;
      case 2:
        console.log('Febrer');
        break;
      case 3:
        console.log('Març');
        break;
      case 4:
        console.log('Abril');
        break;
      default:
      console.log('Mes no considerat');  
}

/*********************
 * Sentències repetitives - Bucles
 * Sentència For
 * Sentència While
 * Sentència Do..While
 */

 /*Sentència For
for (var i = 10;i >= 1;i--){
  console.log(i);
}*/

/*Sentència While
var i = 0;
while(i >= 1){
  console.log(i);
  i--;
}*/

/*Sentència do..while
var i = 12;
do{
  console.log(i);
  i++;
}while(i <= 10)*/

/*******************
 * Valors veritables i falsos
 */

 //Valors falsos: undefined, null, 0, ''
 //Valors veritables: NOT valors falsos

 /*var edat;
 edat = 10;

 if(edat){
   console.log('Variable està definida');
 }else{
   console.log('Variable no definida');
 }

 //operadors d'igualtat
if(edat === '10'){
  console.log('Variable amb coerció');
}else{
  console.log('Variable sense coerció');
}*/

/****************
 * Exercici de sentències
 */

 /********************
  * Tens dos alumnes, Pau i Maria.
  * Pau té les següents notes al curs de JavaScript: 14, 19, 16.
  * Maria té les següents notes al mateix curs: 12, 18, 10.
  * 
  * Calcular la mitjana de cada alumne, a més indicar qui té la mitjana
  * superior, i indicar si l'alumne està aprovat, per a això la seva mitjana 
  * ha de ser superior a 13.
  */
/*
  var mitjanaPau = (14 + 19 + 16)/3;
  var mitjanaMaria = (12 + 16 + 10)/3;

  //Mitjana superior
  if( mitjanaPau > mitjanaMaria ){
    console.log('Pau té la mitjana superior.');
  }else if(mitjanaMaria > mitjanaPau){
    console.log('Maria té la mitjana superior.');
  }else{
    console.log('Pau i Maria tenen mitjanes iguals.');
  }

  //mostrar si estan aprovats
  for(var i=1;i <= 2;i++){
    if(i === 1){
      console.log('Mitjana de Pau:' + mitjanaPau);
      if(mitjanaPau > 13){
        console.log('Pau està aprovat.');
      }else{
        console.log('Pau està suspès.');
      }
    }else{
      console.log('Mitjana de Maria:' + mitjanaMaria);
      if(mitjanaMaria > 13){
        console.log('Maria està aprovada.');
      }else{
        console.log('Maria està suspesa.');
      }
    }
  } 
    */