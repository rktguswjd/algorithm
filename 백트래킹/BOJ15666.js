const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let m = 0;
let nArr = [];
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  m = arr[1];

  nArr = input
    .shift()
    .split(" ")
    .map((n) => +n)
    .sort((a, b) => a - b);

  backtracking([], 0);
  const ans = [...set];
  console.log(ans.join("\n"));
};

const set = new Set();

const backtracking = (pick, next) => {
  if (pick.length == m) {
    set.add(pick.join(" "));
    return;
  }

  for (let i = 0; i < nArr.length; i++) {
    if (next > nArr[i]) continue;
    pick.push(nArr[i]);
    backtracking(pick, nArr[i]);
    pick.pop();
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
