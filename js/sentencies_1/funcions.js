/*************
 * Funcions
 *  */
/*
function benvingut(){
    let nom="Radu Pavel Ghervan";
    return "Hola Benvingut/da " + nom + " a la secció de funcions";
    }
var missatge = benvingut();
console.log(missatge);
var missatge2 = benvingut();
console.log(missatge2);
*/
//Parts d'una funció
//entrades(arguments), codi, sortida(return)
/*
function quadratNumero(num){
    var resultat = num * num;
    return resultat;
}

function multiplicarNums (num1,num2)
{
    var r = num1*num2;
    return r;

}

function multiplicaQuadrats(num1,num2)
{
    var n1=quadratNumero(num1);
    var n2=quadratNumero(num2);
    return multiplicarNums(n1,n2);
}
    var mquadrats=multiplicaQuadrats(2,3);
    console.log(mquadrats); 

var numero = 2;
var c = quadratNumero(quadratNumero(numero));
console.log(c);
var suma = 4 + multiplicarNums(7,4);
console.log (suma);
*/
//var valor = quadratNumero(numero);
//console.log(valor);
//console.log(quadratNumero(5));

//Funció que converteix de graus Fahrenheit a Celsius
 // 32F = 0C, 68F = 20C.
 //C = (F - 32) * 5/9
/*
function convertirFahrenheitACelsius(grausFah,parama,paramb){
    var celsius = (grausFah - 32) * 5 / 9;
    console.log(parama);
    return celsius;
}

var tempUn = convertirFahrenheitACelsius(32,70,20);
var tempDos = convertirFahrenheitACelsius(68,80);
console.log(tempUn);
console.log(tempDos);

*/
/*
function calcularEdat(anyNaixement){
    return 2019 - anyNaixement;
}
/*
var edat1 = calcularEdat(1990);
var edat2 = calcularEdat(1980);
var edat3 = calcularEdat(1970);
console.log(edat1);
console.log(edat2);
console.log(edat3);
*/
/*
 * Exercici de codificació 3
 * 
 * Calcular quants anys li falten a una persona per jubilar-se.
 * Una persona es jubila als 65 anys.
 * Enviar com a dades a la funció el seu any de naixement i el seu nom.
 * 
 * Solució:
*/

/* function calcularTempsJubilacio(anyNaixement, nom){
     var edat = calcularEdat(anyNaixement);
     var anysJubilacio = 65 - edat;
     console.log(nom + ' li falten ' + anysJubilacio + ' anys per a la seva jubilació.');
 }

 calcularTempsJubilacio(1990,'Pau');
 calcularTempsJubilacio(1978, 'Josep');


/********************
 * Funcions com a expressions
 */
//Arguments Undefined
/*var nom; 
var prova = function(n){ //---->Equivalent a Function prova(n)
    return 'Hola ' + n;
}
nom = 'Pau';
console.log(prova(nom));

//Arguments Nuls

var a;
a = null;
var valorNul = function(a){
    return a;
}
console.log(valorNul(a));
*/

//Arguments per defecte
/*
var sumar = function(a = 5, b = 3, c = 3){
    return a + b + c;
}
console.log(sumar(1,3,5));
console.log(sumar(10));

//Plantilles de cadenes (template string)
var nom = 'Pau';
console.log(`El nom és: ${nom}`);

var a = 5;
var b = 10;
//console.log('La suma és:' + (a + b));
console.log(`La suma és: ${a + b}`);
*/
/*
function factorial(n)
{
    if (n==1) return 1;
    else return n*factorial(n-1);
}
console.log (factorial (5))

/*
 * Exercici 4
 * Implementar una funció que ens permeti avaluar el 
 * percentatge de respostes positives i negatives d'un examen
 * La funció ha de rebre el nom, i la quantitat de 
 * respostes positives i negatives
 * 
 * La funció ha de calcular el percentatge que representa cada
 * tipus de resposta, en una base de 100 preguntes.
 * 
 * De les respostes positives es defineix la puntuació de la persona en:
 * A(> 90%), B(70% - 89%), C(45% - 69%), D(<45%)
 * 
 * Solució:
 */
/*
 var calcularPuntuacio = function(nom, pos, neg){
    var suma = pos + neg; 
    var percentPos = (pos / suma) * 100;
     var percentNeg = (neg / suma) * 100;
     var puntuacio = '';

     if(percentPos > 90){
         puntuacio = 'A';
     }else if(percentPos >= 70){
         puntuacio = 'B';
     }else if(percentPos >= 45){
         puntuacio = 'C';
     }else{
         puntuacio = 'D';
     }
     return `${nom} té la puntuació ${puntuacio}, Positives:${percentPos}%, Negatives:${percentNeg}% `;     
 }


 var resultat = calcularPuntuacio('Pau', 200,100 );
 console.log(resultat);
*/