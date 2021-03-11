const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let m = 0;
const solution = (input) => {
  const arr = input.shift().split(" ");
  n = +arr[0];
  m = +arr[1];

  const numArr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  numArr.sort((a, b) => a - b);
  const visitedArr = new Array(n).fill(0);
  backtracking([], numArr, visitedArr);
  const ans = [...set];
  console.log(ans.join("\n"));
};

const set = new Set();
const backtracking = (pickedArr, numArr, visitedArr) => {
  if (pickedArr.length === m) {
    set.add(pickedArr.join(" "));
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visitedArr[i] === true) continue;
    visitedArr[i] = true;
    pickedArr.push(numArr[i]);
    backtracking(pickedArr, numArr, visitedArr);
    pickedArr.pop();
    visitedArr[i] = false;
  }
};

const input = [];
const main = (rl) => {
  rl.on("line", (line) => {
    input.push(line);
  }).on("close", () => {
    solution(input);
    process.exit();
  });
};

main(rl);
