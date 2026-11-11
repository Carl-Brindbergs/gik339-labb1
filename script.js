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

/*
Om add hade haft nyckelordet let istället så hade funktionen fortfarande fungerat lika bra
men det hade funnits en risk att man senare i koden skriver över värdet för add
och då tappar man funktionaliteten från funktionen. Det går dock inte att skriva över en const
och därför passar det bättre här.
*/
const add = (num1, num2) => {
  console.log(num1 == 0);
  console.log(num2 === "0");
  console.log(num2 === 0);
  console.log(num1 == NaN);
  console.log(num1 ? "truthy" : "falsy");
  return num1 + num2;
};

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
