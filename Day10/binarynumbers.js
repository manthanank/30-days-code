'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
  var n = parseInt(readLine());
  var binary = [];

  while (n > 0) {
    binary.push(n % 2)
    n = Math.floor(n / 2)
  }

  binary = binary.reverse()

  var ones = 0;;
  var max = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 1) {
      ones += 1;
    } else if (binary[i] === 0) {
      if (ones > max) max = ones;
      ones = 0;
    }
  }

  if (ones > max) max = ones

  console.log(max)
}