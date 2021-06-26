const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let n = 0;
let v = 0;
let list = [];
let visit = [];
const solution = (input) => {
  n = +input.shift();
  v = +input.shift();

  visit = new Array(n).fill(false);
  list = Array.from(Array(n), () => Array(0));
  for (let i = 0; i < v; i++) {
    const arr = input[i].split(" ");
    const a = +arr[0] - 1;
    const b = +arr[1] - 1;
    list[a].push(b);
    list[b].push(a);
  }

  dfs(0);
  console.log(cnt);
};

let cnt = 0;
const dfs = (v) => {
  // 방문 처리
  visit[v] = true;

  // 갈 곳
  for (let i = 0; i < list[v].length; i++) {
    // 방문 검사
    if (visit[list[v][i]]) continue;
    cnt++;
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
