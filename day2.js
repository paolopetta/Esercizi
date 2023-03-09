/*--------- LETTURA FILE --------- */
//Leggo il file
fs = require('fs');

try {  
    var data = fs.readFileSync('inputDay2.txt', 'utf8');

    //console.log(data.toString());    
}catch(e) {
    console.log('Error:', e.stack);
}

var array = data.split("\n\n")

var totale = array.map(element => {
    return element.split('\n')
    .map(element2 => element2.split(' '))
    .reduce((element3, totRound) => {
        switch(element3[0]){
            case 'A':
                totRound += 1
                break
            case 'B':
                totRound += 2
                break
            case 'C':
                totRound += 3
                break
        }
    })
})

console.log(totale)

