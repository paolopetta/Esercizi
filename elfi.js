/*--------- LETTURA FILE --------- */
//Leggo il file
fs = require('fs');

try {  
    var data = fs.readFileSync('testo.txt', 'utf8');

    //console.log(data.toString());    
}catch(e) {
    console.log('Error:', e.stack);
}

/*--------- FOR --------- */
var elfi = data.split('\n\n');
var array = []

for(let i = 0 ; i < elfi.length ; i++){
    elfo = elfi[i].split('\n')
    let sum = 0
    for(let y = 0 ; y < elfo.length ; y++){
        sum += parseInt(elfo[y])
    }
    array.push(sum)
}
// TEST
/*console.log(array)
console.log(Math.max(...array))*/

/*--------- MAP --------- */
var array2 = []
elfi.forEach(element => {
    elfo2 = element.split('\n')
    sum2 = 0
    elfo2.forEach(element2 => {
        sum2 += parseInt(element2)
    })
    array2.push(sum2)
});
// TEST
//console.log(sum2)

/*--------- MAP --------- */
var elfo3 = elfi.map(element => element.split('\n').reduce((total, calorie) => total + Number(calorie), 0))

// TEST
console.log(elfo3)


