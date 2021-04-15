const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let list = [];
let visit = null;
const solution = (input) => {
  const arr = input
    .shift()
    .split(" ")
    .map((n) => +n);
  const n = arr[0];
  const m = arr[1];
  list = Array.from(Array(n), () => Array(0));
  for (let i = 0; i < m; i++) {
    let temp = input
      .shift()
      .split(" ")
      .map((n) => +n);
    list[temp[0]].push(temp[1]);
    list[temp[1]].push(temp[0]);
  }
  /*
  0 : 1,3
  1 : 0,2,4
  2 : 1,3
  3 : 2,0
  4 : 1
*/
  visit = new Array(n).fill(false);
  let res = false;
  for (let i = 0; i < n; i++) {
    visit[i] = true;
    res = dfs(i, 0);
    visit[i] = false;
    if (res) {
      break;
    }
  }
  if (res) console.log(1);
  else console.log(0);
};
const dfs = (start, depth) => {
  if (depth == 4) {
    return true;
  }
  let res = false;
  for (let next of list[start]) {
    if (visit[next]) continue;
    visit[next] = true;
    res |= dfs(next, depth + 1);
    visit[next] = false;
  }
  return res;
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
