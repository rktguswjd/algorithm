const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let m = 0;
let visited = [];
let set = new Set();
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((e) => +e);
  n = arr[0];
  m = arr[1];
  visited = new Array(n).fill(false);
  input = input[0].split(" ").map((e) => +e);
  input.sort((a, b) => a - b);
  backtracking(input, -1, []);
  const str = [...set];
  console.log(str.join("\n"));
};

const backtracking = (input, start, pickedArr) => {
  if (pickedArr.length === m) {
    set.add(pickedArr.join(" "));
    return;
  }

  for (let i = start + 1; i < n; i++) {
    if (visited[i] === true) continue;
    visited[i] = true;
    pickedArr.push(input[i]);
    backtracking(input, i, pickedArr);
    pickedArr.pop();
    visited[i] = false;
  }
};
//1 2 3 4
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
