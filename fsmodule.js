const fs = require('fs');

fs.writeFile('file2.txt', "This is a data", ()=>{
    console.log("written to the file")
});

fs.readFileSync('file.txt', 'utf8', (err,data)=>{
    console.log(err,data)
});

console.log("Finished reading file")