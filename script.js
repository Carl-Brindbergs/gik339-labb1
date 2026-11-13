/* 
Kommenterar ut de första två för let och const har inte blivit deklarerade ännu
 och ger ett ReferenceError om jag försöker skriva ut de i konsolen.
 var fungerar men ger undefined, eftersom den är tillgänglig utanför sitt scope
 men har ännu inte fått något värde
*/

//console.log(x)
//console.log(y);
console.log(z);

{
  let x = 1;
  const y = 2;
  var z = 3;

  // Här fungerar de alla tre utan problem
  console.log(x);
  console.log(y);
  console.log(z);
}

/* 
Här får vi problem med let och const igen, eftersom vi är utanför kod blocket.
var skriver ut sitt värde nu dock, eftersom det har fått sitt värde när blocket kördes.
 */

// console.log(x);
// console.log(y);
console.log(z);

const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);
  console.log(num1 ? "truthy" : "falsy");

  if (
    !(num1 === null || num1 === undefined) &&
    !(num2 === null || num2 === undefined) &&
    typeof num1 === "number" &&
    typeof num2 === "number"
  ) {
    return num1 + num2;
  }
};

/*
Om add hade haft nyckelordet let istället så hade funktionen fortfarande fungerat lika bra
men det hade funnits en risk att man senare i koden skriver över värdet för add
och då tappar man funktionaliteten från funktionen. Det går dock inte att skriva över en const
och därför passar det bättre här.
*/

/*
Om man  istället skulle ha skapat en funktionsdeklaration så hade det sett ut såhär:

function add(num1, num2) {
  return num1 + num2;
}

return innebär att man returnerar ett värde eller objekt till det som kallar på funktionen.
Så till exempel om vi använder funktionsdeklarationen:
let test = add(5,3)

Då skickar vi 5 och 3 som argument till funktionen, den tar emot dem i sina parametrar,
utför additionen 5 + 3, och returnerar resultatet, så test hade fått värdet 8.
*/

/*
En ternary operator fungerar så att den utvärderar ett villkor som resulterar i true/false och
väljer sedan vilket beteende den ska utföra baserat på resultatet. Generellt bör utförandet
vara ganska simpelt, även om man tekniskt sett kan utföra flera saker med hjälp av kommatecken,
men det blir mer passande att skriva en if-sats isåfall.

Skillnaden mellan == och === är att de sistnämnda inte konverterar typen för att göra jämförelsen.
till exempel 5 == "5" ger resultatet true, medan 5 === '5' ger false, för man jämför
talet 5 och strängen 5.

I min tidigare if-sats så kollar jag separat så att num1 och num2 inte är null ELLER undefined
sen kollar vi så att de också är nummer genom att använda "typeof" på variabeln,
som kommer returnera en sträng med vilken typ variablerna har och om det stämmer överens med "number".
*/

const num1 = 0;
let arg1;
let sum = false;

console.log(add(sum, 1));
console.log(add("0", 3));
console.log(add(3, "num1"));
console.log(add(-5, num1));
console.log(add(arg1, 7));
console.log(add());
console.log(add(5, 3));

console.log(num1);
console.log(sum);

/*
En parameter är en lokal variabel som deklareras i en funktions parameterlista och tar emot argument, vilket är värden eller variabler
som skickas med i anropet till en funktion, t.ex add(5,3).
Variabler används för att lagra värden av olika datatyper. Parametrar är alltså också variabler men de används
specifikt för att ta emot värden i funktionsanrop. Man kan skicka en variabel som argument, men ett argument behöver inte vara en variabel.


värdet vi fick ut sist på num1 är 0 för även om de delar namn som num1 inom funktionen är en lokal variabel som bara lever inom funktionen
medans utanför har vi deklarerat den som en const, vilket betyder att den är konstant och inte kan ändra värde.


När vi gör ett funktionsanrop med t.ex "add(-5, num1)" så skickar vi dessa två som argument, funktionen add tar emot det i sina parametrar
num1 och num2. Sen skriver vi ut true/false i konsolen baserat på några villkor, så num1 har värdet -5 här, och -5 == 0 är false.
num2 däremot är 0, så på raden "num2 === 0 kommer det villkoret bli true. Sedan kommer vi till ternary operatorn som skriver ut truthy, för
inom datatypen för siffror, så alla siffror som inte är 0 räknas som truthy.
Efter det kommer vi till if-satsen, som kollar så att ingen utav dom är null eller undefined, vilket blir true eftersom dom *inte* är null eller undefined.
Sen kollar vi så att de är siffror, och vid det tillfället skulle num1 innehålla -5 medans num2 innehåller 0. Sen använder vi typeof, vilket kommer returnera
"number" för vardera, och vi kollar så att det returnerade värdet stämmer med "number", vilket det gör, vilket betyder att vi har siffror och vi kan
till sist returnera num1 + num2, vilket blir -5 + 0 = -5, och eftersom anropet ligger i console.log() så skrivs det ut -5 i konsolen.
*/
