const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let list = [];
let visited = [];
let order = [];
let inputOrder = [];
let ans = [];
let n = 0;
const solution = (input) => {
  n = +input.shift();
  list = Array.from(Array(n + 1), () => Array(0));
  for (let i = 0; i < n - 1; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((n) => +n);
    list[temp[0]].push(temp[1]);
    list[temp[1]].push(temp[0]);
  }

  inputOrder = input
    .shift()
    .split(" ")
    .map((n) => +n);

  order = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    order[inputOrder[i]] = i + 1;
  }

  for (let i = 1; i <= n; i++) {
    list[i].sort((a, b) => {
      if (order[a] < order[b]) return -1;
      return 1;
    });
  }

  visited = new Array(n + 1).fill(false);
  dfs(1);
  if (inputOrder.join("") === ans.join("")) console.log(1);
  else console.log(0);
};

const dfs = (v) => {
  visited[v] = true;
  ans.push(v);

  for (let i = 0; i < list[v].length; i++) {
    if (visited[list[v][i]]) continue;
    visited[list[v][i]] = true;
    dfs(list[v][i]);
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
