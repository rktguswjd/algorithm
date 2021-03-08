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
  backtracking([], numArr, 0);
  console.log(ans.join("\n"));
};

const ans = [];
const backtracking = (pickedArr, numArr, start) => {
  if (pickedArr.length === m) {
    ans.push(pickedArr.join(" "));
    return;
  }

  for (let i = start; i < n; i++) {
    pickedArr.push(numArr[i]);
    backtracking(pickedArr, numArr, i);
    pickedArr.pop();
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
