const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const solution = (input) => {
  //  친구 관계를 가진 사람 A, B, C, D, E가 존재하는지
  // A는 B와 친구다.
  // B는 C와 친구다.
  // C는 D와 친구다.
  // D는 E와 친구다.

  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  let n = arr[0];
  let m = arr[1];
  const list = Array.from(Array(n), () => Array(0));
  for (let i = 0; i < m; i++) {
    const edge = input[i].split(" ").map((n) => +n);
    list[edge[0]].push(edge[1]);
    list[edge[1]].push(edge[0]);
  }

  const visited = new Array(n).fill(false);
  let flag = false;
  for (let i = 0; i < n; i++) {
    visited[i] = true;
    flag = dfs(0, i, list, visited);
    visited[i] = false;
    if (flag) break;
  }
  if (flag) console.log(1);
  else console.log(0);
};

const dfs = (depth, v, list, visited) => {
  if (depth == 4) {
    return true;
  }
  let flag = false;
  for (let next of list[v]) {
    if (visited[next]) continue;
    visited[next] = true;
    flag |= dfs(depth + 1, next, list, visited);
    visited[next] = false;
  }
  return flag;
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
