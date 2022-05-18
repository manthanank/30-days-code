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

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    let maxSum
    
    for (let i = 0; i < arr.length - 2; i++) {
        for (let a = 0; a < arr[i].length - 2; a++) {
            const currentSum = arr[i][a]
                + arr[i][a + 1]
                + arr[i][a + 2]
                + arr[i + 1][a + 1]
                + arr[i + 2][a]
                + arr[i + 2][a + 1]
                + arr[i + 2][a + 2]
            
            if (currentSum > maxSum || maxSum == null) {
                maxSum = currentSum
            }
        }
    }
    
    console.log(maxSum)
}
