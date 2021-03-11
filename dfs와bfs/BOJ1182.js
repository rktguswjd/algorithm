const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let s = 0;
let numArr = [];
const solution = (input) => {
  const arr = input.shift().split(" ");
  n = +arr[0];
  s = +arr[1];

  numArr = input
    .shift()
    .split(" ")
    .map((n) => +n);

  dfs(0, 0);
  console.log(count);
};

let count = 0;

const dfs = (i, sum) => {
  if (i == n) return;
  if (sum + numArr[i] === s) count++;

  // 더하지 않을 때
  dfs(i + 1, sum);
  // 더할 때
  dfs(i + 1, sum + numArr[i]);
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
