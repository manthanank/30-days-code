'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // Enter your code here
    let arr =  inputLines.map(readLine);
    const map : { [key:string]:boolean; } = {};
    arr.forEach((el, idx) => {
     if(el in map) {
         // do nothing
     } else if(idx !== 0) {
         map[el] = true;
        console.log(el);
     }
    });
}