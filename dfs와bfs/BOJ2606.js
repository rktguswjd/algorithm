const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = 0;
const solution = (input) => {
  const n = +input.shift();
  const nodeCount = +input.shift();
  for (let i = 0; i < nodeCount; i++) {
    input[i] = input[i].split(" ").map((n) => +n);
  }
  const list = Array.from(Array(n + 1), () => Array(0));
  const visited = new Array(n + 1).fill(false);
  for (let i = 0; i < nodeCount; i++) {
    let a = input[i][0];
    let b = input[i][1];
    list[a].push(b);
    list[b].push(a);
  }

  dfs(list, 1, visited);
  console.log(answer - 1);
};

const dfs = (list, v, visited) => {
  visited[v] = true;
  answer += 1;
  for (let i = 0; i < list[v].length; i++) {
    if (visited[list[v][i]]) continue;
    dfs(list, list[v][i], visited);
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
