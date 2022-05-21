"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";
  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

class Difference {
  __elements: number[];

  maximumDifference: number;

  constructor(arr: number[]) {
    this.__elements = [...arr];
  }

  computeDifference() {
    const [max, min] = this.__elements.reduce(
      ([max, min], v) => [Math.max(max, v), Math.min(min, v)],
      [-Infinity, Infinity]
    );
    this.maximumDifference = max - min;
  }
}

function main() {
  // Enter your code here
  inputLines.shift();
  const elements = inputLines
    .pop()
    .split(" ")
    .map((v) => parseInt(v));
  const d = new Difference(elements);
  d.computeDifference();
  console.log(d.maximumDifference);
}
