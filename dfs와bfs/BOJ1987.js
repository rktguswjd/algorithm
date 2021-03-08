const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let r = 0;
let c = 0;

const solution = (input) => {
  const arr = input.shift().split(" ");
  r = +arr[0];
  c = +arr[1];

  const map = [];
  for (let i = 0; i < r; i++) {
    map.push(input.shift().split(""));
  }

  //   dfs(0, 0, map, pick)
  cnt[map[0][0].charCodeAt()]++;
  backtracking(0, 0, map, 1);
  console.log(max);
};

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
let max = -1;
const cnt = new Array(256).fill(0);
const backtracking = (y, x, map, count) => {
  if (max < count) max = count;
  for (let i = 0; i < 4; i++) {
    let nextY = y + dy[i];
    let nextX = x + dx[i];
    if (nextY < 0 || nextX < 0 || nextY >= r || nextX >= c) continue;
    if (cnt[map[nextY][nextX].charCodeAt()] >= 1) continue;
    cnt[map[nextY][nextX].charCodeAt()]++;
    backtracking(nextY, nextX, map, count + 1);
    cnt[map[nextY][nextX].charCodeAt()]--;
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
