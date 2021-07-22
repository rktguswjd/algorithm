const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n;

const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  n = arr[0];
  let m = arr[1];

  const list = Array.from(Array(n + 1), () => Array(0));
  for (let i = 0; i < m; i++) {
    const edge = input[i].split(" ").map((n) => +n);
    list[edge[0]].push(edge[1]);
    list[edge[1]].push(edge[0]);
  }

  const visitedArr = new Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (visitedArr[i]) continue;
    dfs(i, list, visitedArr);
    cnt++;
  }
  console.log(cnt);
};

const dfs = (v, list, visitedArr) => {
  visitedArr[v] = true;

  for (let next of list[v]) {
    if (visitedArr[next]) continue;
    dfs(next, list, visitedArr);
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
