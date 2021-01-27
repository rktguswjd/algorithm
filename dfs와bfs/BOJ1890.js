const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0;
let count = 0;
const solution = (input) => {
  n = +input.shift();
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(" ").map((e) => +e);
  }
  dfs(n - 1, n - 1, input);
  console.log(count);
};

const dfs = (y, x, input) => {
  // 조건 처리
  if (y === 0 && x === 0) {
    count++;
    return;
  }
  // 주변 탐색
  // 왼쪽
  for (let i = x - 1; i >= 0; i--) {
    if (input[y][i] === x - i) {
      dfs(y, i, input);
    }
  }
  // 위쪽
  for (let i = y - 1; i >= 0; i--) {
    if (input[i][x] === y - i) {
      dfs(i, x, input);
    }
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
