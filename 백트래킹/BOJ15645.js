const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let m = 0;
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  m = arr[1];
  const numArr = input
    .shift()
    .split(" ")
    .map((n) => +n);

  numArr.sort((a, b) => a - b);

  const visitedArr = new Array(n + 1).fill(false);
  backtracking([], numArr, visitedArr);
  console.log(ans.join("\n"));
};

const ans = [];
const backtracking = (pickedArr, numArr, visitedArr) => {
  if (pickedArr.length === m) {
    ans.push(pickedArr.join(" "));
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
