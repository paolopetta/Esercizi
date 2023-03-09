/* PRIMO ESERCIZIO ARROW FUNCTION */

let myFunction = (a,b) => a * b; 
//console.log(myFunction(2,1))

/* SECONDO ESERCIZIO ARROW FUNCTION */
// TODO: define the function divideByTwo here

let divideByTwo = (num) => num / 2;

/*console.log(divideByTwo(4));
console.log(divideByTwo(8));*/


//Trasforma
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)

let stringLenghtArrow = str => `the length of "${str}" is:` + str.length

console.log(stringLenghtArrow(longestCityNameInTheWorld))




