var readline = require('readline');

var lines = []
var rl = readline.createInterface({
  input: process.stdin
});

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})

function solve(lines) {
	for(let i = 1;i < Number(lines[0])+ 1;i++){
        let arr = lines[i].split(' ');
        let aValue = BigInt(arr[0]);
        let bValue = BigInt(arr[1]);
        if (aValue === bValue){
            console.log('DRAW');
        }
        else if (arr[2] === '1') {
            aValue > bValue ? console.log('A') : console.log('B');
        }
        else {
            bValue > aValue ? console.log('A') : console.log('B');
        }
    }
}
