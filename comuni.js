const fs = require('fs');

let rawdata = fs.readFileSync('comuni.json');
var comuni = JSON.parse(rawdata);


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Che comune cerchi?', input => {
    console.log(comuni.filter(element => element["nome"].toLowerCase().includes(input.toLowerCase())))
    readline.close();
});
