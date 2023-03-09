const fs = require('fs')

const print = (string) => {
    console.log(string.toString())
}

fs.readFile('./file1.txt', (err, data) => {
    print(data)
    fs.readFile('./file2.txt', (err, data) => {
        print(data)

        fs.readFile('./file3.txt', (err, data) => {
            print(data)
        })
    })
})

const file1 = fs.readFileSync('./file1.txt');
print(file1)
const file2 = fs.readFileSync('./file2.txt');
print(file2)
const file3 = fs.readFileSync('./file3.txt');
print(file3)